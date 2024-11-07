{

    // problem-6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(myProfile: Profile, update: Partial<Profile>): Profile {
        return {
            ...myProfile,
            ...update
        }
    }

    const myProfile: Profile = {
        name: "Rasibul Islam",
        age: 25,
        email: "rasibul179@gmail.com"
    }

    const updateProdile: Partial<Profile> = {
        age: 27
    }

    const updatedProfile: Profile = updateProfile(myProfile, updateProdile);
    console.log(updatedProfile);
}