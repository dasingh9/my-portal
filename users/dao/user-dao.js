export class UserDao {
    async getUsers () {
        //make an api call to get data from server
        const response = await fetch('https://reqres.in/api/users');
        const rawJson = await response.json();
        return rawJson;
    }
}