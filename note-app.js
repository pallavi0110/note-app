var demo = new Vue({
  el: "#noteApp",
  data: {
    collapsed: true,
    noteText: "",
    notes: [],
    index: 0,
    color: null,
    edit: false,
    selected: "ff0000",
    currentEditIndex : -1,
    colors: [{
      text: "Red",
      colorValue: "ff0000"
    }, {
      text: "Green",
      colorValue: "00ff00"
    }, {
      text: "Blue",
      colorValue: "0000ff"
    }]
  },
  methods: {
    createNote: function() {
      if (this.edit === true) {
        this.notes[this.currentEditIndex].text = this.noteText
        this.notes[this.currentEditIndex].color = this.selected      
        } else {
        this.notes.push({
          text: this.noteText,
          color: this.selected
        })
      };
      (this.collapsed = true), (this.noteText = ""),(this.edit = false)
    },
    editNote: function(index) {
      this.edit = true
      this.collapsed = false
      this.noteText = this.notes[index].text
      this.selected = this.notes[index].color
      this.currentEditIndex = index
      let that = this
      Vue.nextTick(function() {
        that.$refs.textareaRef.focus()
      })
    },
    cancelNote: function() {
      this.collapsed = true
      this.noteText = ""
      this.selected = "ff0000"
    },
    deleteNote: function(index) {
      this.notes.splice(index, 1)
    }
  }
})
