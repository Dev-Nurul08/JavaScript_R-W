let studentId = 8133;
let studentName = "Nurul Shaikh";

let m_maths = 89;
let m_science = 76;
let m_english = 89;
let m_wanted= 300;
let totalMarks = m_maths + m_science + m_english;

let per = totalMarks/m_wanted *100;

let grade ="B";

    console.log(`Student Id  :  ${studentId}`);
    console.log(`Student Name : ${studentName} `);
    console.log(`Marks in Maths : ${m_maths}`);
    console.log(`Marks in Science : ${m_science}`);
    console.log(`Marks in English : ${m_english}`);

    console.log(`Total Marks Wanted : ${m_wanted}`);

    console.log(`Marks ${studentName} got : ${totalMarks}`);
    console.log(`Percentage ${studentName} got : ${per}`);
    console.log(`Grade ${studentName} got : ${grade}`);
