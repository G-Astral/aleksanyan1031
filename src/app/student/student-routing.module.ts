import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentItemComponent } from './pages/student-item/student-item.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentLayoutComponent } from './shared/components/student-layout/student-layout.component';

const routes: Routes = [
  {
    path:'',
    component: StudentLayoutComponent,
    children: [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: 'item/:id',
        component: StudentItemComponent
      },
      {
        path: 'item',
        component: StudentItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
