type User = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const user: User = {
    id: 1,
    username: 'ale123',
    password: 's44s544',
    createdAt: new Date(),
    updatedAt: new Date()
};

type PartialUser = Partial<User>;

const user2: PartialUser = {
    id: 1
}

// OMIT
type NewUser = Omit<User, 'id'|'username'>

type SearchUser = Pick<User, 'username'>;

const searchUser: SearchUser = {
    username:'alessandro'
}



