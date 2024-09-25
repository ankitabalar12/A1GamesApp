import AsyncStorage from "@react-native-community/async-storage";

export const registration = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const finalRes = await res.json();
    console.log('finalRes-----', finalRes);
    await AsyncStorage.setItem('registetiondata', JSON.stringify(finalRes));
    return finalRes;
};
export const otpapi = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify((data)),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const finalRes = await res.json();
    return finalRes;
};
export const login = async (url, data) => {
    console.log('data-----', data)
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const finalRes = await res.json();
        console.log('finalRes----', finalRes)
        if (finalRes && finalRes.success == true) {

            await AsyncStorage.setItem('logindata', JSON.stringify(finalRes.data[0]));
            const userdata = await AsyncStorage.getItem('logindata')
            const finaluserdata = JSON.parse(userdata);
            console.log('finaluserdata-->>>>', finaluserdata)
            console.log('Login successful. User ID:----', finalRes.data[0]);

        }

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }

};

export const uploadimagedata = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

export const updateUserProfileData = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify((data))
    });
    const finalRes = await res.json();
    // console.log('updateuserprofile-==>>', finalRes)

    return finalRes;
}