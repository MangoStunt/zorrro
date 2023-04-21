interface IRandomizedData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    date: string,
    age: number
  };
  cell: string;
}

export interface IUserData extends IRandomizedData{
  loading: boolean;
}
