class task {
    constructor(id, title, descrption = '', completed = false, date = new Date()) {
     this.id=id
     this.title=title
     this.descrption=descrption
     this.completed=completed
     this.date=date
    }
}
export default task