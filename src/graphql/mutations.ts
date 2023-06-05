/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createLists = /* GraphQL */ `
  mutation CreateLists($input: CreateListsInput!) {
    createLists(input: $input) {
      id
      title
      content
    }
  }
`;
export const updateLists = /* GraphQL */ `
  mutation UpdateLists($input: UpdateListsInput!) {
    updateLists(input: $input) {
      id
      title
      content
    }
  }
`;
export const deleteLists = /* GraphQL */ `
  mutation DeleteLists($input: DeleteListsInput!) {
    deleteLists(input: $input) {
      id
      title
      content
    }
  }
`;
