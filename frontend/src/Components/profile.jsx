import React from "react";

export default function Profile(){
    return(
            <div className="profile">
                <div className="profileimg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99952 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1813 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0ZM14.2857 43.5536C14.551 40.9105 15.7887 38.4602 17.7586 36.6782C19.7285 34.8961 22.2901 33.9094 24.9464 33.9094C27.6028 33.9094 30.1644 34.8961 32.1343 36.6782C34.1042 38.4602 35.3418 40.9105 35.6071 43.5536C32.3701 45.4372 28.6917 46.4296 24.9464 46.4296C21.2012 46.4296 17.5228 45.4372 14.2857 43.5536ZM38.8214 41.3036C38.0603 38.1983 36.2795 35.4381 33.764 33.4647C31.2484 31.4913 28.1436 30.4187 24.9464 30.4187C21.7492 30.4187 18.6444 31.4913 16.1289 33.4647C13.6134 35.4381 11.8326 38.1983 11.0714 41.3036C7.7288 38.4634 5.33824 34.6659 4.2226 30.4239C3.10695 26.1819 3.31996 21.6996 4.83287 17.5825C6.34577 13.4654 9.08568 9.91174 12.6826 7.40141C16.2795 4.89108 20.5601 3.54503 24.9464 3.54503C29.3327 3.54503 33.6134 4.89108 37.2103 7.40141C40.8072 9.91174 43.5471 13.4654 45.06 17.5825C46.5729 21.6996 46.7859 26.1819 45.6703 30.4239C44.5546 34.6659 42.1641 38.4634 38.8214 41.3036ZM25 10.7143C23.2341 10.7143 21.5079 11.2379 20.0396 12.219C18.5713 13.2001 17.4269 14.5946 16.7511 16.226C16.0753 17.8575 15.8985 19.6528 16.243 21.3847C16.5875 23.1167 17.4379 24.7076 18.6866 25.9563C19.9352 27.205 21.5262 28.0554 23.2581 28.3999C24.9901 28.7444 26.7853 28.5676 28.4168 27.8918C30.0483 27.216 31.4428 26.0716 32.4238 24.6033C33.4049 23.135 33.9286 21.4088 33.9286 19.6429C33.9286 17.2748 32.9879 15.0038 31.3135 13.3294C29.639 11.655 27.368 10.7143 25 10.7143ZM25 25C23.9405 25 22.9047 24.6858 22.0237 24.0972C21.1428 23.5085 20.4561 22.6718 20.0507 21.6929C19.6452 20.7141 19.5391 19.6369 19.7458 18.5977C19.9525 17.5585 20.4627 16.604 21.2119 15.8548C21.9611 15.1056 22.9157 14.5954 23.9549 14.3886C24.9941 14.1819 26.0712 14.288 27.0501 14.6935C28.029 15.099 28.8657 15.7856 29.4543 16.6666C30.043 17.5476 30.3571 18.5833 30.3571 19.6429C30.3571 21.0637 29.7927 22.4263 28.7881 23.4309C27.7834 24.4356 26.4208 25 25 25Z" fill="white"/>
                    </svg>
                </div>
                <div className="profiletxt">                
                    <div className="profilename">Name</div>
                    <div className="profiledesignation">Designation</div>
                    <div className="profileid">ID</div>
                </div>
                <div className="profilelogout">
                    <button className="profilelogoutbutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M8.33337 25C8.33337 25.5525 8.55287 26.0824 8.94357 26.4731C9.33427 26.8638 9.86417 27.0833 10.4167 27.0833H26.2292L21.4375 31.8541C21.2423 32.0478 21.0873 32.2782 20.9815 32.5321C20.8758 32.786 20.8213 33.0583 20.8213 33.3333C20.8213 33.6083 20.8758 33.8806 20.9815 34.1345C21.0873 34.3884 21.2423 34.6188 21.4375 34.8125C21.6312 35.0077 21.8616 35.1627 22.1155 35.2685C22.3694 35.3743 22.6417 35.4287 22.9167 35.4287C23.1917 35.4287 23.464 35.3743 23.7179 35.2685C23.9718 35.1627 24.2022 35.0077 24.3959 34.8125L32.7292 26.4791C32.9189 26.281 33.0676 26.0474 33.1667 25.7916C33.3751 25.2844 33.3751 24.7155 33.1667 24.2083C33.0676 23.9526 32.9189 23.7189 32.7292 23.5208L24.3959 15.1875C24.2016 14.9932 23.971 14.8391 23.7172 14.734C23.4634 14.6289 23.1914 14.5748 22.9167 14.5748C22.642 14.5748 22.37 14.6289 22.1162 14.734C21.8624 14.8391 21.6318 14.9932 21.4375 15.1875C21.2433 15.3817 21.0892 15.6123 20.9841 15.8661C20.879 16.1199 20.8249 16.3919 20.8249 16.6666C20.8249 16.9413 20.879 17.2133 20.9841 17.4671C21.0892 17.7209 21.2433 17.9515 21.4375 18.1458L26.2292 22.9166H10.4167C9.86417 22.9166 9.33427 23.1361 8.94357 23.5268C8.55287 23.9175 8.33337 24.4474 8.33337 25ZM35.4167 4.16663H14.5834C12.9258 4.16663 11.3361 4.82511 10.164 5.99721C8.99185 7.16931 8.33337 8.75902 8.33337 10.4166V16.6666C8.33337 17.2192 8.55287 17.7491 8.94357 18.1398C9.33427 18.5305 9.86417 18.75 10.4167 18.75C10.9692 18.75 11.4991 18.5305 11.8898 18.1398C12.2805 17.7491 12.5 17.2192 12.5 16.6666V10.4166C12.5 9.86409 12.7195 9.33419 13.1102 8.94349C13.5009 8.55279 14.0308 8.33329 14.5834 8.33329H35.4167C35.9692 8.33329 36.4991 8.55279 36.8899 8.94349C37.2806 9.33419 37.5 9.86409 37.5 10.4166V39.5833C37.5 40.1358 37.2806 40.6657 36.8899 41.0564C36.4991 41.4471 35.9692 41.6666 35.4167 41.6666H14.5834C14.0308 41.6666 13.5009 41.4471 13.1102 41.0564C12.7195 40.6657 12.5 40.1358 12.5 39.5833V33.3333C12.5 32.7808 12.2805 32.2509 11.8898 31.8602C11.4991 31.4695 10.9692 31.25 10.4167 31.25C9.86417 31.25 9.33427 31.4695 8.94357 31.8602C8.55287 32.2509 8.33337 32.7808 8.33337 33.3333V39.5833C8.33337 41.2409 8.99185 42.8306 10.164 44.0027C11.3361 45.1748 12.9258 45.8333 14.5834 45.8333H35.4167C37.0743 45.8333 38.664 45.1748 39.8361 44.0027C41.0082 42.8306 41.6667 41.2409 41.6667 39.5833V10.4166C41.6667 8.75902 41.0082 7.16931 39.8361 5.99721C38.664 4.82511 37.0743 4.16663 35.4167 4.16663Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
    );


}