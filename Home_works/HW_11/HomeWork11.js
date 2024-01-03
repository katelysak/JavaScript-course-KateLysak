/*
Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. 
У списку нотаток повинні бути методи для додавання нової нотатки, видалення, 
редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток.
Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, 
скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.
*/


class TodoList1 {
    constructor() {
      this.notes = [];
    }
  
    addNote(note) {
      if (note.trim() !== '') {
        this.notes.push({ content: note, done: false });
      } else {
        console.log('Note cannot be empty!');
      }
    }
  
    deleteNote(index) {
      this.notes.splice(index, 1);
    }
  
    editNoteContent(index, newContent) {
      if (newContent.trim() !== '') {
        this.notes[index].content = newContent;
      } else {
        console.log('Note content cannot be empty!');
      }
    }
  
    markAsDone(index) {
      this.notes[index].done = true;
    }
  
    getNoteInfo(index) {
      return this.notes[index];
    }
  
    getAllNotes() {
      return this.notes;
    }
  
    getNotesCount() {
      return this.notes.length;
    }
  
    getRemainingNotesCount() {
      const remainingNotes = this.notes.filter(note => !note.done);
      return remainingNotes.length;
    }
  }
  
  // Приклад використання:
  const myTodoList1 = new TodoList1();
  
  myTodoList1.addNote('Buy groceries');
  myTodoList1.addNote('Call John');
  myTodoList1.addNote('Prepare presentation');
  
  console.log(myTodoList1.getAllNotes()); // Виводить всі нотатки
  console.log(myTodoList1.getNotesCount()); // Показує загальну кількість нотаток
  
  myTodoList1.markAsDone(0); // Позначає першу нотатку як виконану
  console.log(myTodoList1.getRemainingNotesCount()); // Показує кількість невиконаних нотаток
  
  myTodoList1.deleteNote(1); // Видаляє другу нотатку
  console.log(myTodoList1.getAllNotes()); // Виводить залишок нотаток


/*
Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, 
а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).
*/


class TodoList2 {
    constructor() {
      this.notes = [];
    }
  
    addNote(note) {
      if (note.trim() !== '') {
        this.notes.push({ content: note, done: false });
      } else {
        console.log('Note cannot be empty!');
      }
    }
  
    deleteNote(index) {
      this.notes.splice(index, 1);
    }
  
    editNoteContent(index, newContent) {
      if (newContent.trim() !== '') {
        this.notes[index].content = newContent;
      } else {
        console.log('Note content cannot be empty!');
      }
    }
  
    markAsDone(index) {
      this.notes[index].done = true;
    }
  
    getNoteInfo(index) {
      return this.notes[index];
    }
  
    getAllNotes() {
      return this.notes;
    }
  
    getNotesCount() {
      return this.notes.length;
    }
  
    getRemainingNotesCount() {
      const remainingNotes = this.notes.filter(note => !note.done);
      return remainingNotes.length;
    }

    findNoteByName(name) {
        return this.notes.find(note => note.content.toLowerCase() === name.toLowerCase());
      }
    
    sortNotesByStatus() {
        const doneNotes = this.notes.filter(note => note.done);
        const undoneNotes = this.notes.filter(note => !note.done);
        this.notes = [...doneNotes, ...undoneNotes];
      }

  }

const myTodoList2 = new TodoList2();

myTodoList2.addNote('Buy groceries');
myTodoList2.addNote('Call John');
myTodoList2.addNote('Prepare presentation');

myTodoList2.markAsDone(0);

console.log(myTodoList2.findNoteByName('call john')); // Пошук за ім'ям

console.log(myTodoList2.getAllNotes()); // Вивід перед сортуванням
myTodoList2.sortNotesByStatus();
console.log(myTodoList2.getAllNotes()); // Вивід після сортування за статусом


/*
Вам необхідно додати кожній нотатці дату її створення і редагування, 
а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.
*/

class TodoList3 {
    constructor() {
      this.notes = [];
    }
  
    addNote(content) {
      const note = {
        content,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.notes.push(note);
    }
  
    editNote(index, newContent) {
      if (this.notes[index]) {
        this.notes[index].content = newContent;
        this.notes[index].updatedAt = new Date();
      }
    }
  
    // Решта методів класу
  
    sortByCreationDate() {
      this.notes.sort((a, b) => a.createdAt - b.createdAt);
    }
  
    sortByUpdateDate() {
      this.notes.sort((a, b) => a.updatedAt - b.updatedAt);
    }
  
    // Пошук за датою створення
    findNotesByCreationDate(targetDate) {
      return this.notes.filter(note => {
        return note.createdAt.toDateString() === targetDate.toDateString();
      });
    }
  
    // Пошук за датою оновлення
    findNotesByUpdateDate(targetDate) {
      return this.notes.filter(note => {
        return note.updatedAt.toDateString() === targetDate.toDateString();
      });
    }
  }
  
  // Приклад використання:
  
  const myTodoList3 = new TodoList3();
  
  myTodoList3.addNote('Buy groceries');
  myTodoList3.addNote('Call John');
  myTodoList3.addNote('Prepare presentation');
  
  myTodoList3.editNote(0, 'Buy vegetables');
  
  console.log(myTodoList3.findNotesByCreationDate(new Date())); // Пошук за сьогоднішньою датою
  console.log(myTodoList3.findNotesByUpdateDate(new Date())); // Пошук за сьогоднішньою датою редагування
  
  myTodoList3.sortByCreationDate();
  console.log(myTodoList3.getAllNotes()); // Виведення відсортованих за датою створення нотаток