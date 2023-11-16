import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {
  result : any ;
  queryFormGroup !: FormGroup
  messages = [
    {role : "system" , content:"You are a helpful assistant."}
  ];

  constructor(private fb : FormBuilder , private httpClient : HttpClient) { }

  ngOnInit(): void {

    this.queryFormGroup = this.fb.group({
      query : this.fb.control("")
    })

  }

  handleAskGPT() {
    let url = "https://api.openai.com/v1/chat/completions " ;
    let httpHeaders = new HttpHeaders().set("Authorization","Bearer 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")

    this.messages.push({
      role: "user" , content: this.queryFormGroup.value.query
    })

    let payload = {
      model : "gpt-3.5-turbo" ,
      messages : this.messages
    }
    this.httpClient.post(url,payload,{headers:httpHeaders}).subscribe({
      next : (resp) =>{
        this.result = resp
      },
      error : (err)=>{
        this.result = err

      }
    })

  }
}
