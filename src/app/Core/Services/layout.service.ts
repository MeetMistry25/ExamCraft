import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private sidebarOpenSubject = new BehaviorSubject<boolean>(true); // Default open? Or closed on mobile?
    public sidebarOpen$ = this.sidebarOpenSubject.asObservable();

    toggleSidebar() {
        this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    }

    setSidebarState(isOpen: boolean) {
        this.sidebarOpenSubject.next(isOpen);
    }
}
