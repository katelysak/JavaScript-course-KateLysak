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
  

const myTodoList1 = new TodoList1();
  
myTodoList1.addNote('');                     // returns 'Note cannot be empty!'
myTodoList1.addNote('Buy groceries');
myTodoList1.addNote('Wash dishes');
myTodoList1.addNote('Read a book');
myTodoList1.editNoteContent(0, '')           //returns 'Note content cannot be empty!'
myTodoList1.editNoteContent(0, 'Buy milk')
  
console.log(myTodoList1.getAllNotes());
console.log(myTodoList1.getNotesCount());
console.log(myTodoList1.getNoteInfo(2));
console.log(myTodoList1.getNoteInfo(5));     // returns 'undefined', not existing index
  
myTodoList1.markAsDone(0);
myTodoList1.markAsDone(1);
console.log(myTodoList1.getRemainingNotesCount());
  
myTodoList1.deleteNote(1);
console.log(myTodoList1.getAllNotes());


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

    sortNotesByStatus(status) {
        const doneNotes = this.notes.filter(note => note.done);
        const undoneNotes = this.notes.filter(note => !note.done);

        if (status === 'done') {
            return this.notes = [...doneNotes, ...undoneNotes];
        } else if (status === 'undone') {
            return this.notes = [...undoneNotes, ...doneNotes];
        } else {
            return 'Uknown error!'
        }
    }
}


const myTodoList2 = new TodoList2();

myTodoList2.addNote('Make my bed');
myTodoList2.addNote('Call mom');
myTodoList2.addNote('Watch a movie');

myTodoList2.markAsDone(0);

console.log(myTodoList2.findNoteByName('Make my bed'));
console.log(myTodoList2.findNoteByName('Watch a movie'));

console.log(myTodoList2.getAllNotes());

myTodoList2.sortNotesByStatus('done');
console.log(myTodoList2.getAllNotes());

myTodoList2.sortNotesByStatus('undone');
console.log(myTodoList2.getAllNotes());


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
  
    sortByCreationDate() {
      this.notes.sort((a, b) => a.createdAt - b.createdAt);
    }
  
    sortByUpdateDate() {
      this.notes.sort((a, b) => a.updatedAt - b.updatedAt);
    }
  
    findNotesByCreationDate(targetDate) {
      return this.notes.filter(note => {
        return note.createdAt.toDateString() === targetDate.toDateString();
      });
    }
  
    findNotesByUpdateDate(targetDate) {
      return this.notes.filter(note => {
        return note.updatedAt.toDateString() === targetDate.toDateString();
      });
    }

    getAllNotes() {
        return this.notes;
      }
}
  
const myTodoList3 = new TodoList3();
  
myTodoList3.addNote('Buy groceries');
myTodoList3.addNote('Pick up something');
myTodoList3.addNote('Cook a diner');
myTodoList3.addNote('Finish JS Home Work');
  
myTodoList3.editNote(0, 'Buy chocolate');
  
console.log(myTodoList3.findNotesByCreationDate(new Date()));                  // searching by today's date
console.log(myTodoList3.findNotesByUpdateDate(new Date()));                    // searching by updating date
console.log(myTodoList3.findNotesByUpdateDate(new Date('Jan 01 2024')));       // returns empty array as no records on this date

myTodoList3.sortByCreationDate();
console.log(myTodoList3.getAllNotes());