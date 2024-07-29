import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  standalone: true, // Mark as standalone
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent {
  @Output() colorChange = new EventEmitter<string>();
  selectedColor: string = '#ffffff'; // Default color

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedColor = input.value;
    this.colorChange.emit(this.selectedColor); // Emit the selected color
  }
}
