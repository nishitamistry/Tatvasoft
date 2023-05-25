import request from "./request";

const ENDPOINT ="api/user";
const create =async(data)=>{
    const url=`${ENDPOINT}`;
    return request.post(url,data).then((res)=>{
        return res.data;
    });
};

const authService={
    create,
};
export default authService;