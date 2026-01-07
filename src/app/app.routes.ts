import { Routes } from '@angular/router';
import { Login } from './Core/Auth/login/login';
import { Register } from './Core/Auth/register/register';
import { Home } from './Core/Shared/home/home';
import { TeacherDashboard } from './Core/Teacher/teacher-dashboard/teacher-dashboard';
import { UploadMaterial } from './Core/Teacher/upload-material/upload-material';
import { MaterialList } from './Core/Teacher/material-list/material-list';
import { GenerateQuestionPaper } from './Core/Teacher/generate-question-paper/generate-question-paper';
import { QuestionPreview } from './Core/Teacher/question-preview/question-preview';
import { PublishTest } from './Core/Teacher/publish-test/publish-test';
import { StudentPerformance } from './Core/Teacher/student-performance/student-performance';
import { TopicAnalysis } from './Core/Teacher/topic-analysis/topic-analysis';
import { Dashboard } from './Core/Student/dashboard/dashboard';
import { AvailableTests } from './Core/Student/available-tests/available-tests';
import { TakeTest } from './Core/Student/take-test/take-test';
import { Question } from './Core/Student/question/question';
import { TestNavigation } from './Core/Student/test-navigation/test-navigation';
import { Subject } from 'rxjs';
import { SubmitTest } from './Core/Student/submit-test/submit-test';
import { TestResult } from './Core/Student/test-result/test-result';
import { AnswerReview } from './Core/Student/answer-review/answer-review';
import { PerformanceAnalysis } from './Core/Student/performance-analysis/performance-analysis';
import { PageNotFound } from './Core/Shared/page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'teacher-dashboard', component: TeacherDashboard },
    { path: ' teacher/upload-material', component: UploadMaterial },
    { path: ' teacher/material', component: MaterialList },
    { path: ' teacher/question/generate', component: GenerateQuestionPaper },
    { path: ' teacher/question/preview', component: QuestionPreview },
    { path: ' teacher/publish-test', component: PublishTest },
    { path: ' teacher/student-performance', component: StudentPerformance },
    { path: ' teacher/topic-analysis', component: TopicAnalysis },
    { path: ' student/dashboard', component: Dashboard },
    { path: ' student/available-tests', component: AvailableTests },
    { path: ' student/take-test', component: TakeTest },
    { path: ' student/question', component: Question },
    { path: ' student/test-navigation', component: TestNavigation },
    { path: ' student/submit-test', component: SubmitTest },
    { path: ' student/test-result', component: TestResult },
    { path: ' student/answer-review', component: AnswerReview },
    { path: ' student/performance-analysis', component: PerformanceAnalysis },
    { path: '**', component: PageNotFound }

]
