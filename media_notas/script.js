function Student(name, grade1, grade2) {
  this.name = name;
  this.grade1 = grade1;
  this.grade2 = grade2;
}

const students = [];

for (let i = 1; i <= 3; i++) {
  let name, grade1, grade2;
  name = prompt(`Digite o nome do estudante ${i}`);
  grade1 = prompt(`Digite a nota da primeira prova do estudante ${name}`);
  grade2 = prompt(`Digite a nota da segunda prova do estudante ${name}`);
  let student = new Student(name, Number(grade1), Number(grade2));
  students.push(student);
}

for (let i = 0; i <= 2; i++) {
  let average, approved;
  average = (students[i].grade1 + students[i].grade2) / 2;
  approved =
    average >= 7 ? 'Parabéns você foi aprovado(a)!' : 'Você foi reprovado(a).';
  alert(
    `A média do(a) aluno(a) ${students[i].name} é ${average}.\n${approved}`
  );
}
