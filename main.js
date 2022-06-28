let courses = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterCoursesByPrice(courseList, range) {
    courseList.forEach((item) => {
        if (item.prices[0] === null) {
            item.prices[0] = -Infinity;
        }
        if (item.prices[1] === null) {
            item.prices[1] = Infinity;
        }
    });

    if (range[0] === null) {
        range[0] = -Infinity;
    }
    if (range[1] === null) {
        range[1] = Infinity;
    }

    const coursesFiltered = courseList
        .filter((courseListItem) => courseListItem.prices[0] <= range[1] && courseListItem.prices[1] >= range[0])
        .map((courseListCountry) => courseListCountry.name);

    return coursesFiltered;
}

const result = filterCoursesByPrice(courses, requiredRange2);

console.log(result);
