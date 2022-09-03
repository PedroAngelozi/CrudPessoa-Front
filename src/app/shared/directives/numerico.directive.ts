import { Directive, Host, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers:[{ 
   provide: NG_VALUE_ACCESSOR,
   useExisting: NumericoDirective,
   multi: true
  }]
})


export class NumericoDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;
  
  registerOnchange(fn: any): void {
    this.onChange - fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  } 

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

  constructor(private el: ElementRef) { }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }


  @HostListener('keyup', ['$event'])
onkeyup($event: any) {

  let valor = $event.target.value;

  //Expressão regular: remove tudo que não é numero
  valor = valor.replace(/[\D]/g, '');

  $event.target.value = valor;
//Atualiza o Model 
  this.onChange(valor);
}

  
}

