/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLists = /* GraphQL */ `
  subscription OnCreateLists($id: ID, $title: String, $content: String) {
    onCreateLists(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
export const onUpdateLists = /* GraphQL */ `
  subscription OnUpdateLists($id: ID, $title: String, $content: String) {
    onUpdateLists(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
export const onDeleteLists = /* GraphQL */ `
  subscription OnDeleteLists($id: ID, $title: String, $content: String) {
    onDeleteLists(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
