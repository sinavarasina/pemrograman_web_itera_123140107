const TIME_URL = 'https://worldtimeapi.org/api/ip';

export async function fetchTime() {
    try {
        const res = await fetch(TIME_URL);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        return data.datetime;
    } catch (err) {
        return null;
    }
}

