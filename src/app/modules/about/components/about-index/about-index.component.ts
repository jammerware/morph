import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutIndexComponent {

}
