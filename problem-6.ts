{

    // problem-6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, update: Partial<Profile>): Profile {
        return {
            ...profile,
            ...update
        }
    }

    const profile: Profile = {
        name: "Rasibul Islam",
        age: 25,
        email: "rasibul179@gmail.com"
    }

    const updateProdile: Partial<Profile> = {
        age: 27
    }

    const updatedProfile: Profile = updateProfile(profile, updateProdile);
    console.log(updatedProfile);
}