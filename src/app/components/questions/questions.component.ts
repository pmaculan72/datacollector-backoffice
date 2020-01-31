import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-questions',
   templateUrl: './questions.component.html',
   styleUrls: ['./questions.component.css']
})

export class QuestionsComponent{

   constructor() {}

   togleData(event) {
      var details = event.target.closest("tr").nextSibling.nextElementSibling;
      details.style.display = details.style.display === 'none' ? '' : 'none';
      event.target.classList.toggle("footable-toggle-hide");
      event.target.classList.toggle("footable-toggle-show");
   }

}
