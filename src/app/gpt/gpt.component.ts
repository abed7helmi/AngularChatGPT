import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {

  queryFormGroup !: FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.queryFormGroup = this.fb.group({
      query : this.fb.control("")
    })

  }

  handleAskGPT() {

  }
}
