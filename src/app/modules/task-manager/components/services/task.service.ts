import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private _http: HttpClient) {}

  addTask(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/task', data);
  }

  updateTask(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/task/${id}`, data);
  }

  getTaskList(): Observable<any> {
    return this._http.get('http://localhost:3000/task');
  }

  deleteTask(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/task/${id}`);
  }
}
