export const selectFields = ({ id, by, url, time, title } = {}) => ({
    id,
    by,
    url,
    time,
    title,
});

// export const selectFields = (data) => {
//     let selectedFields = {};
//     if(data != null) {
//         selectedFields.id = data.id;
//         selectedFields.by = data.by;
//         selectedFields.url = data.url;
//         selectedFields.time = data.time;
//         selectedFields.title = data.title;
//         return selectedFields
//     }
//     else return {}
// };