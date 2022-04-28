import {atom} from "recoil";
import {useState} from "react";

export interface IAddressTypes {
    id: number;
    name:string;
    zonecode: string;
    address: string;
}

export const isModalVisible = atom<boolean>({
    key: "isModalVisible",
    default: false,
})
export const nameState = atom<string>({key: "nameState", default: ""})
export const addressState = atom<string>({
    key: "addressState",
    default: "",
});
export const zoneCodesState = atom<string>({
    key: "zoneCodeState",
    default: "",
});

export const contentsState = atom<IAddressTypes[]>({
    key: "contents",

    // default에는 임의의 데이터를 넣어줍시다.
    default: [
        {
            id: 1,
            name: "손은정",
            zonecode: "13357",
            address: "경기 성남시 중원구 산성대로 198",
        },

        {
            id: 2,
            name: "손시현",
            zonecode: "39325",
            address: "경북 구미시 박정희로 236-8",
        },
    ],
});
