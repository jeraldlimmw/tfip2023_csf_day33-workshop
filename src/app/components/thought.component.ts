import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit{
  
  // parent component assesses if sharing is supported
  @Input()
  canShare = false

  @Output()
  onShare = new Subject<string>

  fb = inject(FormBuilder)
  shareThought!: FormGroup

  // since form has only one field, can create in OnInit
  ngOnInit(): void {
    this.shareThought = this.fb.group({
      thought: this.fb.control('', [ Validators.required, Validators.minLength(3)])
    })
  }

  share() {
    // attribute text as 'thought' from form
    const text = this.shareThought.value['thought']
    // method on share sends text to parent
    this.onShare.next(text)
  }

  // reset creates a new form
  clear() {
    this.shareThought.reset()
  }

  invalid(): boolean {
    return !this.canShare || this.shareThought.invalid
  }
}
