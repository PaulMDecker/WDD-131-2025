// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections:[ 
            { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
            { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
        ]
  };

function setCourseInfo(course){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    
}