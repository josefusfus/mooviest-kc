import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieTabPage } from './movie-tab.page';

describe('MovieTabPage', () => {
  let component: MovieTabPage;
  let fixture: ComponentFixture<MovieTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
