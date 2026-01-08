import { Routes } from '@angular/router';
import { Login } from './Core/Auth/login/login';
import { Register } from './Core/Auth/register/register';
import { Home } from './Core/Shared/home/home';
import { AboutUs } from './Core/Shared/aboutus/aboutus';
import { PrivacyPolicy } from './Core/Shared/privacy-policy/privacy-policy';
import { Terms } from './Core/Shared/terms/terms';
import { Profile } from './Core/Shared/profile/profile';
import { Settings } from './Core/Shared/settings/settings';

import { TeacherLayout } from './Core/Teacher/teacher-layout/teacher-layout';
import { StudentLayout } from './Core/Student/student-layout/student-layout';
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
import { SubmitTest } from './Core/Student/submit-test/submit-test';
import { TestResult } from './Core/Student/test-result/test-result';
import { AnswerReview } from './Core/Student/answer-review/answer-review';
import { PerformanceAnalysis } from './Core/Student/performance-analysis/performance-analysis';
import { PageNotFound } from './Core/Shared/page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'about', component: AboutUs },
    { path: 'privacy', component: PrivacyPolicy },
    { path: 'terms', component: Terms },
    { path: 'cookies', redirectTo: 'privacy' },

    // Teacher Routes
    {
        path: 'teacher',
        component: TeacherLayout,
        children: [
            { path: 'dashboard', component: TeacherDashboard },
            { path: 'upload-material', component: UploadMaterial },
            { path: 'material', component: MaterialList },
            { path: 'question/generate', component: GenerateQuestionPaper },
            { path: 'question/preview', component: QuestionPreview },
            { path: 'publish-test', component: PublishTest },
            { path: 'student-performance', component: StudentPerformance },
            { path: 'topic-analysis', component: TopicAnalysis },
            { path: 'profile', component: Profile },
            { path: 'settings', component: Settings },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },

    // Student Routes
    {
        path: 'student',
        component: StudentLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'available-tests', component: AvailableTests },
            { path: 'take-test', component: TakeTest },
            { path: 'question', component: Question },
            { path: 'test-navigation', component: TestNavigation },
            { path: 'submit-test', component: SubmitTest },
            { path: 'test-result', component: TestResult },
            { path: 'answer-review', component: AnswerReview },
            { path: 'performance-analysis', component: PerformanceAnalysis },
            { path: 'profile', component: Profile },
            { path: 'settings', component: Settings },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },

    // Redirect legacy routes or handle 404
    { path: 'teacher-dashboard', redirectTo: 'teacher/dashboard' },
    { path: '**', component: PageNotFound }
];
