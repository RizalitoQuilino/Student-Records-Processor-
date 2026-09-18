const fs = require("fs");
const path = require("path");

function loadStudents() {
    const candidatePaths = [
        path.join(__dirname, "students.json"),
        path.join(process.cwd(), "students.json")
    ];

    for (const filePath of candidatePaths) {
        try {
            const rawData = fs.readFileSync(filePath, "utf8");
            const parsed = JSON.parse(rawData);

            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch (error) {
            // Ignore and try the next location.
        }
    }

    return [];
}

const students = loadStudents();

function cloneStudent(student) {
    if (!student) {
        return null;
    }

    return {
        ...student,
        grades: Array.isArray(student.grades) ? [...student.grades] : []
    };
}

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades) || student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce((sum, grade) => sum + Number(grade), 0);
    return total / student.grades.length;
}

function getTopStudents(studentList, n = 5) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    const limit = Number.isInteger(n) && n >= 0 ? n : 0;

    return studentList
        .map(student => ({
            ...student,
            grades: Array.isArray(student.grades) ? [...student.grades] : [],
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, limit);
}

function groupByCourse(studentList) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    return studentList.reduce((groups, student) => {
        const course = student && student.course ? student.course : "Unknown";

        if (!groups[course]) {
            groups[course] = [];
        }

        groups[course].push(cloneStudent(student));
        return groups;
    }, {});
}

function getEnrolledCount(studentList) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    return {
        enrolled: studentList.filter(student => student.enrolled === true).length,
        notEnrolled: studentList.filter(student => student.enrolled === false).length
    };
}

function findStudent(studentList, name) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    if (typeof name !== "string") {
        throw new Error("name must be a string.");
    }

    const trimmedName = name.trim();
    if (!trimmedName) {
        return null;
    }

    const student = studentList.find(
        item => item && item.name && item.name.toLowerCase() === trimmedName.toLowerCase()
    );

    return student ? cloneStudent(student) : null;
}

function getCourseAverages(studentList) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    const groups = groupByCourse(studentList);

    return Object.keys(groups)
        .map(course => {
            const validStudents = groups[course].filter(student => student.grades.length > 0);
            const average = validStudents.length > 0
                ? validStudents.reduce((sum, student) => sum + getAverageGrade(student), 0) / validStudents.length
                : 0;

            return { course, average };
        })
        .sort((a, b) => b.average - a.average);
}

function exportSummary(studentList) {
    if (!Array.isArray(studentList)) {
        throw new Error("students must be an array.");
    }

    const allGrades = studentList.reduce(
        (grades, student) => grades.concat(Array.isArray(student.grades) ? student.grades : []),
        []
    );

    const overallAverage = allGrades.length > 0
        ? allGrades.reduce((sum, grade) => sum + Number(grade), 0) / allGrades.length
        : 0;

    const top = getTopStudents(studentList, 1);

    return {
        totalStudents: studentList.length,
        overallAverage,
        topPerformingStudent: top.length > 0 ? top[0] : null,
        breakdownByCourse: getCourseAverages(studentList)
    };
}

function filterByYear(studentList, year) {
    return studentList
        .filter(student => student.year === year)
        .map(student => cloneStudent(student));
}

function sortByName(studentList) {
    return studentList
        .map(student => cloneStudent(student))
        .sort((a, b) => a.name.localeCompare(b.name));
}

function generateReport(studentList) {
    const enrollment = getEnrolledCount(studentList);
    const allGrades = studentList.reduce(
        (grades, student) => grades.concat(Array.isArray(student.grades) ? student.grades : []),
        []
    );
    const overallAverage = allGrades.length > 0
        ? allGrades.reduce((sum, grade) => sum + Number(grade), 0) / allGrades.length
        : 0;

    return {
        totalStudents: studentList.length,
        enrollment,
        overallAverage: Number(overallAverage.toFixed(2)),
        topStudents: getTopStudents(studentList, 5).map(student => ({
            id: student.id,
            name: student.name,
            course: student.course,
            average: Number(student.average.toFixed(2))
        })),
        courseAverages: getCourseAverages(studentList).map(item => ({
            course: item.course,
            average: Number(item.average.toFixed(2))
        }))
    };
}

function main() {
    if (!Array.isArray(students) || students.length === 0) {
        console.error("No student data was loaded. Please check students.json.");
        process.exit(1);
    }

    const report = generateReport(students);
    console.log(JSON.stringify(report, null, 2));

    console.log("\nStudent lookup test:");
    const found = findStudent(students, "Maria Santos");
    console.log(found ? `Found: ${found.name} (${found.course})` : "Student not found.");

    console.log("\nTop student:");
    console.log(getTopStudents(students, 1)[0]?.name || "None");
}

if (require.main === module) {
    main();
}

module.exports = {
    students,
    getAverageGrade,
    getTopStudents,
    groupByCourse,
    getEnrolledCount,
    findStudent,
    getCourseAverages,
    exportSummary,
    filterByYear,
    sortByName,
    generateReport,
    main
};
