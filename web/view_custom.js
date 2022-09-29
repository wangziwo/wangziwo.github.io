// // console.log(RenderingStates)
// // console.log(exports.RenderingStates)
// window.rendered = []
// window.SelectText = (data) => {
//     console.log(data)
//     // var event = event || window.event;  //标准化事件对象
//     // console.log(event)
//     // console.log("this",this)
//     try {
//         var selecter = window.getSelection().toString();
//         if (selecter != null && selecter.trim() != "") {
//             // alert(selecter);
//             document.getElementById("info").innerText = selecter
//             console.log(selecter)
//         }
//     } catch (err) {
//         var selecter = document.selection.createRange();
//         var s = selecter.text;
//         if (s != null && s.trim() != "") {
//             alert(s)
//         }
//     }
// }
// window.onload = (() => {
//     setTimeout("render_text(this.PDFViewerApplication.page)", 1000)
// })
// document.addEventListener("pagesloaded", (event) => {
//     console.log("pagesloaded")
// });
// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log('DOM fully '); // 译者注："DOM 完全加载以及解析"
// });
// window.render_text = (page_num = 1) => {
//     // console.log(window.rendered)
//     // window.rendered.push(page_num)
//     console.log("rendered")
//     // console.log("render_text")
//     window.page = document.querySelectorAll("div.page")[page_num - 1]
//     console.log(page)
//     if (!page.getAttribute('haschanged')) {
//         pages_info = page.querySelectorAll("span")
//         // console.log(pages_info)
//         for (let a in pages_info) {
//             if (pages_info[a].role == 'presentation') {
//                 // console.log("pages",pages_info[a].role)
//                 var a_html = pages_info[a].innerHTML
//                 // console.log("a_html",a_html)
//                 var a_text = pages_info[a].innerText
//                 if (!a_html) {
//                     continue
//                 }
//                 // console.log("a_text",a_text,a_html,a,page_info)
//                 var list_text = a_text.match(/[a-zA-Z0-9]+|[\u4e00-\u9fa5]|[^%&',;=?$\x22]/ig)
//                 // console.log("list",list_text)
//                 let re = new RegExp('[a-zA-Z]+', "ig");
//                 let temp_html = ""
//                 let total_text = ""
//                 for (let t in list_text) {
//                     // console.log("list_text[t]")
//                     if (re.test(list_text[t])) {
//                         // console.log("test succ",list_text[t])
//                         temp_html = temp_html + "<w onclick=\"SelectText(this)\" Onmousemove=\"onMouse(this)\" onmouseout='onMouseOut(this)' style=\"color: red\">" + list_text[t] + "</w>"
//                         // temp_html = temp_html + list_text[t]
//                     } else {
//                         // console.log("test fail",list_text[t])
//                         temp_html = temp_html + "<w  style=\"color: red\">" + list_text[t] + "</w>"
//                     }
//                     if (t == list_text.length - 1) {
//                         // console.log("temp",temp_html)
//                         // console.log(pages_info[a].innerHTML)
//                         pages_info[a].innerHTML = temp_html
//                     }
//                 }
//                 // console.log(temp_html)
//             }
//         }
//         page.setAttribute("haschanged", true)
//     }
// }
// function onMouse(event){
//     console.log("onmouse",event)
//     event.style.background="green"
// }
// function onMouseOut(event){
//     console.log("onmouseout",event)
//     event.style.background="none"
// }
// function getCurrentPageNum(value) {
//     console.log("page", value)
//     render_text(value)
//     // window.parent.page_return_call( value );
// }