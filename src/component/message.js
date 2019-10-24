// message组件 参数为要输出的字符串
var isMessaging = false;
const message = function msg(content, callback, time) {
    if (isMessaging) {
        return;
    }
    isMessaging = true;
    const delay = time || 3000;
    const node = document.createElement("div");
    // node.innerHTML = `
    //     <div class="m-message-mask"></div>
    //     <div class="m-message-content"
    //         style="transition:all .3s;opcaity:0;transform:translate(-50%,-20px);">
    //         ${content}
    //     </div>
    // `;
    node.innerHTML = `
        <div class="m-message-content"
            style="transition:all .3s;opcaity:0;transform:translate(-50%,-20px);">
            ${content}
        </div>
    `;
    requestAnimationFrame(function() {
        document.body.appendChild(node);
        requestAnimationFrame(() => {
            node.querySelector(".m-message-content").style.opacity = 1;
            node.querySelector(".m-message-content").style.transform =
                "translate(-50%,0)";
        });
    });

    setTimeout(() => {
        node.querySelector(".m-message-content").style.opacity = 0;
        node.querySelector(".m-message-content").style.transform =
            "translate(-50%,-20px)";
        isMessaging = false;
        setTimeout(function() {
            document.body.removeChild(node);
            if (callback) {
                callback();
            }
        }, 400);
    }, delay);
};

export default message;
