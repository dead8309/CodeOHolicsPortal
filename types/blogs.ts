/* 
[
  {
    _id: '6549fdece9242edfbf5429ea',
    author: '65491b90838a0843427339fd',
    title: 'testing 2',
    content: 'test test',
    createdAt: '2023-11-07T09:05:48.822Z',
    updatedAt: '2023-11-07T09:05:48.822Z',
    __v: 0
  },
  {
    _id: '6549ff0bb4cc3ae7850bf11c',
    author: '65491b90838a0843427339fd',
    title: 'testing 3',
    content: 'xyz',
    createdAt: '2023-11-07T09:10:35.565Z',
    updatedAt: '2023-11-07T09:10:35.565Z',
    __v: 0
  },
  {
    _id: '6549ffb2b4cc3ae7850bf122',
    author: '65491b90838a0843427339fd',
    title: 'testing 3',
    thumbNail: 'xyz',
    content: 'xyz',
    createdAt: '2023-11-07T09:13:22.812Z',
    updatedAt: '2023-11-07T09:13:22.812Z',
    __v: 0
  }
] */
export type Blog = {
    _id: string;
    author: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    thumbNail?: string;
    __v: number;
}