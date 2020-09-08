import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -XQVjkeM2Zajuw72quZSbhR3w9el_He8mrJN_v-CBGremOnypI-3XIHtIFAed9pOUp1KTfxEJ7--R-F5mzte1FRy6-ZHoM6nqDb4a0CDiEoAZG5imtLI6mvy16JPX3Yx'
    }
});
