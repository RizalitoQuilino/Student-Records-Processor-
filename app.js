// ==========================================
// STUDENT RECORDS DATA PROCESSOR
// Pure JavaScript - app.js
// ==========================================

const students = [
    {
        "id": 1,
        "name": "Juan Dela Cruz",
        "year": 1,
        "course": "BSIT",
        "grades": [
            90,
            88,
            92,
            85
        ],
        "enrolled": true
    },
    {
        "id": 2,
        "name": "Maria Santos",
        "year": 2,
        "course": "BSCS",
        "grades": [
            95,
            91,
            93,
            94
        ],
        "enrolled": true
    },
    {
        "id": 3,
        "name": "Pedro Reyes",
        "year": 3,
        "course": "BSIT",
        "grades": [
            87,
            89,
            85,
            90
        ],
        "enrolled": true
    },
    {
        "id": 4,
        "name": "Ana Garcia",
        "year": 4,
        "course": "BSIS",
        "grades": [
            92,
            94,
            90,
            95
        ],
        "enrolled": true
    },
    {
        "id": 5,
        "name": "Carlos Mendoza",
        "year": 1,
        "course": "BSIT",
        "grades": [
            80,
            85,
            82,
            88
        ],
        "enrolled": false
    },
    {
        "id": 6,
        "name": "Sofia Ramos",
        "year": 2,
        "course": "BSCS",
        "grades": [
            89,
            91,
            90,
            87
        ],
        "enrolled": true
    },
    {
        "id": 7,
        "name": "Miguel Torres",
        "year": 3,
        "course": "BSIS",
        "grades": [
            84,
            86,
            88,
            85
        ],
        "enrolled": true
    },
    {
        "id": 8,
        "name": "Angela Flores",
        "year": 4,
        "course": "BSIT",
        "grades": [
            96,
            94,
            97,
            95
        ],
        "enrolled": true
    },
    {
        "id": 9,
        "name": "Daniel Cruz",
        "year": 1,
        "course": "BSCS",
        "grades": [
            78,
            82,
            80,
            85
        ],
        "enrolled": false
    },
    {
        "id": 10,
        "name": "Isabella Lopez",
        "year": 2,
        "course": "BSIS",
        "grades": [
            91,
            89,
            94,
            92
        ],
        "enrolled": true
    },
    {
        "id": 11,
        "name": "Mark Villanueva",
        "year": 3,
        "course": "BSIT",
        "grades": [
            88,
            90,
            87,
            91
        ],
        "enrolled": true
    },
    {
        "id": 12,
        "name": "Julia Fernandez",
        "year": 4,
        "course": "BSCS",
        "grades": [
            97,
            96,
            94,
            98
        ],
        "enrolled": true
    },
    {
        "id": 13,
        "name": "Kevin Bautista",
        "year": 1,
        "course": "BSIS",
        "grades": [
            83,
            85,
            81,
            87
        ],
        "enrolled": false
    },
    {
        "id": 14,
        "name": "Nicole Aquino",
        "year": 2,
        "course": "BSIT",
        "grades": [
            90,
            92,
            89,
            91
        ],
        "enrolled": true
    },
    {
        "id": 15,
        "name": "Ryan Castillo",
        "year": 3,
        "course": "BSCS",
        "grades": [
            86,
            88,
            84,
            90
        ],
        "enrolled": true
    },
    {
        "id": 16,
        "name": "Grace Navarro",
        "year": 4,
        "course": "BSIS",
        "grades": [
            93,
            95,
            92,
            94
        ],
        "enrolled": true
    },
    {
        "id": 17,
        "name": "Joshua Lim",
        "year": 1,
        "course": "BSIT",
        "grades": [
            75,
            80,
            78,
            82
        ],
        "enrolled": false
    },
    {
        "id": 18,
        "name": "Patricia Tan",
        "year": 2,
        "course": "BSCS",
        "grades": [
            91,
            93,
            90,
            92
        ],
        "enrolled": true
    },
    {
        "id": 19,
        "name": "Nathan Perez",
        "year": 3,
        "course": "BSIS",
        "grades": [
            85,
            87,
            89,
            88
        ],
        "enrolled": true
    },
    {
        "id": 20,
        "name": "Christine Sy",
        "year": 4,
        "course": "BSIT",
        "grades": [
            98,
            97,
            96,
            99
        ],
        "enrolled": true
    },
    {
        "id": 21,
        "name": "Anthony Ramos",
        "year": 1,
        "course": "BSCS",
        "grades": [
            82,
            84,
            86,
            80
        ],
        "enrolled": false
    },
    {
        "id": 22,
        "name": "Michelle Garcia",
        "year": 2,
        "course": "BSIS",
        "grades": [
            89,
            91,
            88,
            90
        ],
        "enrolled": true
    },
    {
        "id": 23,
        "name": "Brian Santos",
        "year": 3,
        "course": "BSIT",
        "grades": [
            90,
            87,
            92,
            89
        ],
        "enrolled": true
    },
    {
        "id": 24,
        "name": "Laura Reyes",
        "year": 4,
        "course": "BSCS",
        "grades": [
            95,
            94,
            96,
            93
        ],
        "enrolled": true
    },
    {
        "id": 25,
        "name": "Eric Mendoza",
        "year": 1,
        "course": "BSIS",
        "grades": [
            79,
            83,
            81,
            85
        ],
        "enrolled": false
    },
    {
        "id": 26,
        "name": "Samantha Flores",
        "year": 2,
        "course": "BSIT",
        "grades": [
            92,
            90,
            94,
            91
        ],
        "enrolled": true
    },
    {
        "id": 27,
        "name": "Gabriel Torres",
        "year": 3,
        "course": "BSCS",
        "grades": [
            88,
            86,
            90,
            89
        ],
        "enrolled": true
    },
    {
        "id": 28,
        "name": "Rachel Cruz",
        "year": 4,
        "course": "BSIS",
        "grades": [
            94,
            92,
            96,
            95
        ],
        "enrolled": true
    },
    {
        "id": 29,
        "name": "Stephen Lopez",
        "year": 2,
        "course": "BSIT",
        "grades": [],
        "enrolled": false
    },
    {
        "id": 30,
        "name": "Karen Villanueva",
        "year": 3,
        "course": "BSCS",
        "grades": [
            93,
            91,
            95,
            94
        ],
        "enrolled": true
    }
];

// 1. Get the average grade of a student
function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades) || student.grades.length === 0) {
        return 0;
    }

    return student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

// 2. Get the top N students
function getTopStudents(students, n) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    if (typeof n !== "number" || n < 0) {
        throw new Error("n must be a non-negative number.");
    }

    return students
        .map(student => ({
            ...student,
            grades: [...student.grades],
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}

// 3. Group students by course
function groupByCourse(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    return students.reduce((groups, student) => {
        if (!groups[student.course]) {
            groups[student.course] = [];
        }

        groups[student.course].push({
            ...student,
            grades: [...student.grades]
        });

        return groups;
    }, {});
}

// 4. Count enrolled and not enrolled students
function getEnrolledCount(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    return {
        enrolled: students.filter(student => student.enrolled === true).length,
        notEnrolled: students.filter(student => student.enrolled === false).length
    };
}

// 5. Find a student by name
function findStudent(students, name) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    if (typeof name !== "string") {
        throw new Error("name must be a string.");
    }

    const student = students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );

    return student ? { ...student, grades: [...student.grades] } : null;
}

// 6. Get course averages, highest to lowest
function getCourseAverages(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    const groups = groupByCourse(students);

    return Object.keys(groups)
        .map(course => {
            const validStudents = groups[course].filter(
                student => student.grades.length > 0
            );

            const average = validStudents.length > 0
                ? validStudents.reduce(
                    (sum, student) => sum + getAverageGrade(student), 0
                ) / validStudents.length
                : 0;

            return { course, average };
        })
        .sort((a, b) => b.average - a.average);
}

// 7. Export a complete summary
function exportSummary(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    const allGrades = students.reduce(
        (grades, student) => grades.concat(student.grades || []),
        []
    );

    const overallAverage = allGrades.length > 0
        ? allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length
        : 0;

    const top = getTopStudents(students, 1);

    return {
        totalStudents: students.length,
        overallAverage,
        topPerformingStudent: top.length > 0 ? top[0] : null,
        breakdownByCourse: getCourseAverages(students)
    };
}

// Optional: filter by year
function filterByYear(students, year) {
    return students
        .filter(student => student.year === year)
        .map(student => ({ ...student, grades: [...student.grades] }));
}

// Optional: sort alphabetically
function sortByName(students) {
    return students
        .map(student => ({ ...student, grades: [...student.grades] }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

// ==========================================
// MAIN
// ==========================================

function main() {
    console.log("==========================================");
    console.log("       STUDENT RECORDS DATA REPORT");
    console.log("==========================================");

    console.log("\n--- TOTAL STUDENTS ---");
    console.log("Total Students:", students.length);

    console.log("\n--- ENROLLMENT STATUS ---");
    const enrollment = getEnrolledCount(students);
    console.log("Enrolled:", enrollment.enrolled);
    console.log("Not Enrolled:", enrollment.notEnrolled);

    console.log("\n--- OVERALL AVERAGE GRADE ---");
    const allGrades = students.reduce(
        (grades, student) => grades.concat(student.grades),
        []
    );
    const overallAverage = allGrades.length
        ? allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length
        : 0;
    console.log("Overall Average:", overallAverage.toFixed(2));

    console.log("\n--- TOP 5 STUDENTS ---");
    getTopStudents(students, 5).forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - ${student.course} - Average: ${student.average.toFixed(2)}`
        );
    });

    console.log("\n--- AVERAGE GRADE BY COURSE ---");
    getCourseAverages(students).forEach(item => {
        console.log(`${item.course}: ${item.average.toFixed(2)}`);
    });

    console.log("\n--- STUDENTS GROUPED BY COURSE ---");
    const groups = groupByCourse(students);
    Object.keys(groups).forEach(course => {
        console.log(`${course}: ${groups[course].length} students`);
    });

    console.log("\n--- STUDENT SEARCH ---");
    const found = findStudent(students, "Maria Santos");
    console.log(found ? `Found: ${found.name} (${found.course})` : "Student not found.");

    console.log("\n--- NON-EXISTING SEARCH ---");
    console.log(findStudent(students, "Unknown Student"));

    console.log("\n--- COMPLETE SUMMARY ---");
    const summary = exportSummary(students);
    console.log("Total Students:", summary.totalStudents);
    console.log("Overall Average:", summary.overallAverage.toFixed(2));
    console.log(
        "Top-Performing Student:",
        summary.topPerformingStudent ? summary.topPerformingStudent.name : "None"
    );

    console.log("\nCourse Breakdown:");
    summary.breakdownByCourse.forEach(item => {
        console.log(`${item.course}: ${item.average.toFixed(2)}`);
    });

    console.log("\n==========================================");
    console.log("              REPORT COMPLETE");
    console.log("==========================================");
}

main();
