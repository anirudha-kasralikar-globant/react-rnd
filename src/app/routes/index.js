// @flow
import MyIssues from '../views/MyIssues';
import Explore from '../views/Explore';
import Hello from '../views/Hello';
import Landing from '../views/Landing';
import ManagePosts from '../views/ManagePosts';
import ManageTopics from '../views/ManageTopics';

export const LANDING = '/';
export const EXPLORE = '/explore';
export const ISSUES = '/issues';
export const HELLO = '/hello';
export const POSTS = '/posts';
export const TOPICS = '/topics';

export const routes = [
  {
    path: LANDING,
    component: Landing,
    exact: true,
  },
  {
    path: ISSUES,
    component: MyIssues,
    exact: true,
  },
  {
    path: EXPLORE,
    component: Explore,
    exact: true,
  },
  {
    path: HELLO,
    component: Hello,
    exact: true,
  },
  {
    path: POSTS,
    component: ManagePosts,
    exact: true,
  },
  {
    path: TOPICS,
    component: ManageTopics,
    exact: true,
  },
];
