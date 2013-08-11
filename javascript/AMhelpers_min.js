function calculate(n,t,i){var s=document.getElementById(n).value,f,o,u,evalstr,res,h,c,e,l,r;for(i.indexOf("list")!=-1?f=s.split(/,/):(f=[],f[0]=s),o=0;o<f.length;o++){if(str=f[o],str=str.replace(/,/g,""),u="",str.match(/DNE/i))str=str.toUpperCase();else if(str.match(/oo$/)||str.match(/oo\W/))str="`"+str+"`";else if(i.indexOf("fraction")!=-1||i.indexOf("reducedfraction")!=-1?(str=str.replace(/\s/g,""),str.match(/^\(?\-?\(?\d+\)?\/\(?\d+\)?$/)||str.match(/^\(?\d+\)?\/\(?\-?\d+\)?$/)||str.match(/^\s*?\-?\d+\s*$/)||(u+=_("not a valid fraction"))):i.indexOf("fracordec")!=-1?(str=str.replace(/\s/g,""),str.match(/^\s*\-?\(?\d+\s*\/\s*\-?\d+\)?\s*$/)||str.match(/^\s*?\-?\d+\s*$/)||str.match(/^(\d+|\d+\.\d*|\d*\.\d+)$/)||(u+=_(" invalid entry format"))):i.indexOf("mixednumber")!=-1?(str.match(/^\s*\-?\s*\d+\s*(_|\s)\s*\d+\s*\/\s*\d+\s*$/)||str.match(/^\s*?\-?\d+\s*$/)||str.match(/^\s*\-?\d+\s*\/\s*\-?\d+\s*$/)||(u+=_("not a valid mixed number")),str=str.replace(/_/," ")):i.indexOf("scinot")!=-1&&(str=str.replace(/\s/g,""),str=str.replace("x","xx"),str.match(/^\-?[1-9](\.\d*)?(\*|xx)10\^(\(?\-?\d+\)?)$/)||(u+=_("not valid scientific notation"))),i.indexOf("notrig")!=-1&&str.match(/(sin|cos|tan|cot|sec|csc)/))str=_("no trig functions allowed");else if(i.indexOf("nodecimal")!=-1&&str.indexOf(".")!=-1)str=_("no decimals allowed");else{try{evalstr=str,(i.indexOf("allowmixed")!=-1||i.indexOf("mixednumber")!=-1)&&(evalstr=evalstr.replace(/(\d+)\s+(\d+\s*\/\s*\d+)/,"($1+$2)")),i.indexOf("scinot")!=-1&&(evalstr=evalstr.replace("xx","*"));with(Math)res=eval(mathjs(evalstr))}catch(a){u=_("syntax incomplete")}if(isNaN(res)||res=="Infinity"){if(str!=""){for(h=0,c=0,r=0;r<str.length;r++)str.charAt(r)=="("?h++:str.charAt(r)==")"?h--:str.charAt(r)=="["?c++:str.charAt(r)=="]"&&c--;str="`"+str+"` = "+_("undefined"),(h!=0||c!=0)&&(str+=" ("+_("unmatched parens")+")"),trg=str.match(/(sin|cos|tan|sec|csc|cot)\^/),reg=new RegExp("(sqrt|ln|log|sin|cos|tan|sec|csc|cot|abs)([^(])"),errstuff=str.match(reg),trg!=null?(trg=trg[1],str+="["+_("use $1 instead of $2","("+trg+"(x))^2",trg+"^2(x)")+"]"):errstuff!=null&&(str+="["+_("use function notation")+" - "+_("use $1 instead of $2",errstuff[1]+"("+errstuff[2]+")",errstuff[0])+"]")}}else str=i.indexOf("fraction")!=-1||i.indexOf("reducedfraction")!=-1||i.indexOf("mixednumber")!=-1||i.indexOf("scinot")!=-1||i.indexOf("noval")!=-1?"`"+str+"` "+u:"`"+str+" =` "+(Math.abs(res)<1e-15?0:res)+u}f[o]=str+" "}for(s=f.join(", "),e=document.getElementById(t),l=e.childNodes.length,r=0;r<l;r++)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s)),noMathRender||rendermathnode(e)}function ineqtointerval(n){var r=n.split(/or/),t;for(i=0;i<r.length;i++)str=r[i],t="",(pat=str.match(/^([^<]+)\s*(<=?)\s*[a-zA-Z]\s*(<=?)([^<]+)$/))?(t+=pat[2]=="<="?"[":"(",t+=pat[1]+","+pat[4],t+=pat[3]=="<="?"]":")"):(pat=str.match(/^([^>]+)\s*(>=?)\s*[a-zA-Z]\s*(>=?)([^>]+)$/))?(t+=pat[3]==">="?"[":"(",t+=pat[4]+","+pat[1],t+=pat[2]==">="?"]":")"):(pat=str.match(/^([^><]+)\s*([><]=?)\s*[a-zA-Z]\s*$/))?pat[2]==">"?t="(-oo,"+pat[1]+")":pat[2]==">="?t="(-oo,"+pat[1]+"]":pat[2]=="<"?t="("+pat[1]+",oo)":pat[2]=="<="&&(t="["+pat[1]+",oo)"):(pat=str.match(/^\s*[a-zA-Z]\s*([><]=?)\s*([^><]+)$/))?pat[1]=="<"?t="(-oo,"+pat[2]+")":pat[1]=="<="?t="(-oo,"+pat[2]+"]":pat[1]==">"?t="("+pat[2]+",oo)":pat[1]==">="&&(t="["+pat[2]+",oo)"):t=str.match(/all\s*real/i)?"(-oo,oo)":"",r[i]=t;return t=r.join("U")}function intcalculate(n,t,i){var r=document.getElementById(n).value,e,o,u,s,a,c,res,h,v,f;if(r.match(/DNE/i))r=r.toUpperCase();else if(r.replace(/\s+/g,"")=="")r=_("no answer given");else{if(e=[],o=[],i.indexOf("inequality")!=-1){r=r.replace(/or/g," or "),u=r,r=ineqtointerval(r);var y=str.match(/\b([a-zA-Z])\b/),p=str.match(/([a-zA-Z]+)/),l=y!=null?y[1]:p!=null?p[1]:""}else r=r.replace(/\s+/g,"");for(s=r.split(/U/),a=!0,f=0;f<s.length;f++){if(str=s[f],sm=str.charAt(0),em=str.charAt(str.length-1),vals=str.substring(1,str.length-1),vals=vals.split(/,/),vals.length!=2){r=_("syntax incomplete"),a=!1;break}for(j=0;j<2;j++)if(vals[j].match(/oo$/)||vals[j].match(/oo\W/))e[j]=vals[j];else{c="";try{with(Math)res=eval(mathjs(vals[j]))}catch(w){c=_("syntax incomplete")}isNaN(res)||res=="Infinity"||(vals[j]=vals[j],e[j]=(Math.abs(res)<1e-15?0:res)+c)}s[f]=sm+vals[0]+","+vals[1]+em,o[f]=i.indexOf("inequality")!=-1?e[0].match(/oo/)?e[1].match(/oo/)?"RR":l+(em=="]"?"le":"lt")+e[1]:e[1].match(/oo/)?l+(sm=="["?"ge":"gt")+e[0]:e[0]+(sm=="["?"le":"lt")+l+(em=="]"?"le":"lt")+e[1]:sm+e[0]+","+e[1]+em}a&&(i.indexOf("inequality")!=-1?u.match(/all\s*real/)?r=u:(u=u.replace(/or/g,' \\ "or" \\ '),u=u.replace(/<=/g,"le"),u=u.replace(/>=/g,"ge"),u=u.replace(/</g,"lt"),u=u.replace(/>/g,"gt"),r=i.indexOf("noval")!=-1?"`"+u+"`":"`"+u+"= "+o.join(' \\ "or" \\ ')+"`"):r=i.indexOf("noval")!=-1?"`"+s.join("uu")+"`":"`"+s.join("uu")+"` = "+o.join(" U "))}for(h=document.getElementById(t),v=h.childNodes.length,f=0;f<v;f++)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(r)),noMathRender||rendermathnode(h)}function ntuplecalc(n,t){var r=document.getElementById(n).value,o,res,f,h,i;if(r=r.replace(/\s+/g,""),r.match(/DNE/i))r=r.toUpperCase(),u="DNE",outstr="DNE";else{var u="",e=0,s=0;for(i=0;i<r.length;i++)if(dec=!1,e==0&&(u+=r.charAt(i),s=i+1),r.charAt(i).match(/[\(\[\<\{]/)?e++:r.charAt(i).match(/[\)\]\>\}]/)&&(e--,dec=!0),e==0&&dec||e==1&&r.charAt(i)==","){sub=r.substring(s,i),o="";try{with(Math)res=eval(mathjs(sub))}catch(c){o=_("syntax incomplete")}u+=isNaN(res)||res=="Infinity"?o:res,u+=r.charAt(i),s=i+1}outstr="`"+r+"` = "+u}if(t!=null){for(f=document.getElementById(t),h=f.childNodes.length,i=0;i<h;i++)f.removeChild(f.firstChild);f.appendChild(document.createTextNode(outstr)),noMathRender||rendermathnode(f)}return u}function complexcalc(n,t){var r=document.getElementById(n).value,i,o,f,prep,s,real,imag,u,h,e;if(r=r.replace(/\s+/g,""),r.match(/DNE/i))r=r.toUpperCase(),i="DNE",outstr="DNE";else{for(i="",o=r.split(","),f=0;f<o.length;f++){prep=mathjs(o[f],"i"),s="";try{with(Math)real=scopedeval("var i=0;"+prep);with(Math)imag=scopedeval("var i=1;"+prep)}catch(c){s=_("syntax incomplete")}if(isNaN(real)||real=="Infinity"||isNaN(imag)||imag=="Infinity"){i=s;break}else imag-=real,f!=0&&(i+=","),i+=real+(imag>=0?"+":"")+imag+"i"}outstr="`"+r+"` = "+i}if(t!=null){for(u=document.getElementById(t),h=u.childNodes.length,e=0;e<h;e++)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(outstr)),noMathRender||rendermathnode(u)}return i}function matrixcalc(n,t,i,r){function w(estr){var n="",res;try{with(Math)res=eval(mathjs(estr))}catch(t){n=_("syntax incomplete")}return isNaN(res)||res=="Infinity"?estr!=""&&(estr=_("undefined")):estr=(Math.abs(res)<1e-15?0:res)+n,estr}var a,l,o,c,h,s,p,f;if(i!=null&&r!=null){var v=0,e="[",u="[";for(a=0;a<i;a++){for(a>0&&(e+=",",u+=","),e+="(",u+="(",l=0;l<r;l++)l>0&&(e+=",",u+=","),e+=document.getElementById(n+"-"+v).value,u+=w(document.getElementById(n+"-"+v).value),v++;e+=")",u+=")"}e+="]",u+="]"}else{var e=document.getElementById(n).value,u=e,y=0;for(u=u.replace("[","("),u=u.replace("]",")"),u=u.replace(/\s+/g,""),o=[],u=u.substring(1,u.length-1),c=0,f=0;f<u.length;f++)u.charAt(f)=="("?y++:u.charAt(f)==")"?y--:u.charAt(f)==","&&y==0&&(o[o.length]=u.substring(c+1,f-1),c=f+1);for(o[o.length]=u.substring(c+1,u.length-1),f=0;f<o.length;f++){for(calclist2=o[f].split(","),h=0;h<calclist2.length;h++)calclist2[h]=w(calclist2[h]);o[f]=calclist2.join(",")}u="[("+o.join("),(")+")]"}if(e="`"+e+"` = `"+u+"`",t!=null){for(s=document.getElementById(t),p=s.childNodes.length,f=0;f<p;f++)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(e)),noMathRender||rendermathnode(s)}return u}function mathjsformat(n,t){var r=document.getElementById(n).value,i=document.getElementById(t);i.value=mathjs(r)}function stringqpreview(n,t){for(var u=document.getElementById(n).value,i=document.getElementById(t),f=i.childNodes.length,r=0;r<f;r++)i.removeChild(i.firstChild);i.appendChild(document.createTextNode("`"+u+"`")),noMathRender||rendermathnode(i)}function AMpreview(n,t){var h=n.slice(2),o=vlist[h],w=flist[h],r,v,c,p,u,s,b,d,totest,e,f,res,l,a,i;for(vars=o.split("|"),r=document.getElementById(n).value,r=r.replace(/,/g,""),v=r,i=0;i<vars.length;i++)vars[i].charCodeAt(0)>96?arraysearch(vars[i].toUpperCase(),vars)==-1&&(r=r.replace(new RegExp(vars[i],"gi"),vars[i])):arraysearch(vars[i].toLowerCase(),vars)==-1&&(r=r.replace(new RegExp(vars[i],"gi"),vars[i]));for(o=vars.join("|"),c=[],i=0;i<vars.length;i++)if(vars[i].length>1){for(p=!1,e=0;e<greekletters.length;e++)if(vars[i]==greekletters[e]){p=!0;break}p||vars[i].match(/^(\w)_\d+$/)||c.push(vars[i])}for(c.length>0&&(vltq=c.join("|"),u=new RegExp("("+vltq+")","g"),v=r.replace(u,'"$1"')),s=document.getElementById(t),b=s.childNodes.length,i=0;i<b;i++)s.removeChild(s.firstChild);s.appendChild(document.createTextNode("`"+v+"`")),noMathRender||rendermathnode(s),ptlist=pts[h].split(",");var y=0,res=NaN,k=!1;for(iseqn[h]==1&&(r.match(/=/)||(k=!0),r=r.replace(/(.*)=(.*)/,"$1-($2)")),w!=""&&(u=new RegExp("("+w+")\\(","g"),r=r.replace(u,"$1*sin($1+"),o=o+"|"+w),vars=o.split("|"),d=mathjs(r,o);y<ptlist.length&&(isNaN(res)||res=="Infinity");){for(totest="",testvals=ptlist[y].split("~"),e=0;e<vars.length;e++)totest+="var "+vars[e]+"="+testvals[e]+";";totest+=d,f=_("syntax ok");try{with(Math)res=scopedeval(totest)}catch(g){f=_("syntax error")}y++}if(isNaN(res)||res=="Infinity")if(trg=r.match(/(sin|cos|tan|sec|csc|cot)\^/),u=new RegExp("(sqrt|ln|log|sinh|cosh|tanh|sech|csch|coth|sin|cos|tan|sec|csc|cot|abs)("+o+"|\\d)"),errstuff=r.match(u),trg!=null)trg=trg[1],f+=_("syntax error")+": "+_("use $1 instead of $2","("+trg+"(x))^2",trg+"^2(x)");else if(errstuff!=null)f+=": "+_("use $1 instead of $2",errstuff[1]+"("+errstuff[2]+")",errstuff[0]);else{for(l=0,a=0,i=0;i<r.length;i++)r.charAt(i)=="("?l++:r.charAt(i)==")"?l--:r.charAt(i)=="["?a++:r.charAt(i)=="]"&&a--;l!=0||a!=0?f+=": "+_("unmatched parens"):(u=new RegExp("(sqrt|ln|log|sin|cos|tan|sec|csc|cot|abs)([^(])"),errstuff=r.match(u),f=errstuff!=null&&errstuff[2]!="h"?_("syntax error")+": "+_("use function notation")+" - "+errstuff[1]+"(x)":_("syntax error"))}else u=new RegExp("(sqrt|ln|log|sinh|cosh|tanh|sech|csch|tanh|sin|cos|tan|sec|csc|cot|abs)\\s*("+o+")"),errstuff=r.match(u),errstuff!=null&&(f+=". "+_("warning")+": "+_("use $1 instead of $2",errstuff[1]+"("+errstuff[2]+")",errstuff[0]));iseqn[h]==1&&k&&(f=_("syntax error: this is not an equation")),s.appendChild(document.createTextNode(" "+f))}function AMmathpreview(n,t){for(var u=document.getElementById(n).value,i=document.getElementById(t),f=i.childNodes.length,r=0;r<f;r++)i.removeChild(i.firstChild);i.appendChild(document.createTextNode("`"+u+"`")),noMathRender||rendermathnode(i)}function doonsubmit(n,t,i){var h,s,u,f,res,r,j,o,fj,e;if(n!=null){if(n.className=="submitted")return alert(_("You have already submitted this page.  Please be patient while your submission is processed.")),n.className="submitted2",!1;if(n.className=="submitted2")return!1;if(n.className="submitted",!i&&(h=t?confirmSubmit2(n):confirmSubmit(n),!h))return n.className="",!1}for(r in callbackstack)callbackstack[r](r);for(r in intcalctoproc){if(r=parseInt(r),fullstr=document.getElementById("tc"+r).value,fullstr=fullstr.replace(/\s+/g,""),fullstr.match(/DNE/i))fullstr=fullstr.toUpperCase();else{for(calcformat[r].indexOf("inequality")!=-1&&(fullstr=ineqtointerval(fullstr)),u=fullstr.split(/U/),k=0;k<u.length;k++)if(str=u[k],str.length>0&&str.match(/,/)){for(sm=str.charAt(0),em=str.charAt(str.length-1),vals=str.substring(1,str.length-1),vals=vals.split(/,/),j=0;j<2;j++)if(!vals[j].match(/oo$/)&&!vals[j].match(/oo\W/)){s="";try{with(Math)res=eval(mathjs(vals[j]))}catch(c){s="syntax incomplete"}isNaN(res)||res=="Infinity"||(vals[j]=(Math.abs(res)<1e-15?0:res)+s)}u[k]=sm+vals[0]+","+vals[1]+em}fullstr=u.join("U")}document.getElementById("qn"+r).value=fullstr}for(r in calctoproc){for(r=parseInt(r),str=document.getElementById("tc"+r).value,calcformat[r].indexOf("list")!=-1?u=str.split(/,/):(u=[],u[0]=str),f=0;f<u.length;f++){if(str=u[f],str=str.replace(/,/g,""),calcformat[r].indexOf("scinot")!=-1&&(str=str.replace("x","*")),str=str.replace(/(\d+)\s*_\s*(\d+\s*\/\s*\d+)/,"($1+$2)"),(calcformat[r].indexOf("mixednumber")!=-1||calcformat[r].indexOf("allowmixed")!=-1)&&(str=str.replace(/(\d+)\s+(\d+\s*\/\s*\d+)/,"($1+$2)")),str.match(/^\s*$/))res="";else if(str.match(/oo$/)||str.match(/oo\W/))res=str;else if(str.match(/DNE/i))res=str.toUpperCase();else try{with(Math)res=eval(mathjs(str))}catch(c){s=_("syntax incomplete")}u[f]=res}document.getElementById("qn"+r).value=u.join(",")}for(r in matcalctoproc)r=parseInt(r),matsize[r]!=null?(msize=matsize[r].split(","),str=matrixcalc("qn"+r,null,msize[0],msize[1])):str=matrixcalc("tc"+r,null),document.getElementById("qn"+r).value=str;for(r in ntupletoproc)r=parseInt(r),str=ntuplecalc("tc"+r,null),document.getElementById("qn"+r).value=str;for(r in complextoproc)r=parseInt(r),str=complexcalc("tc"+r,null),document.getElementById("qn"+r).value=str;for(r in functoproc){for(r=parseInt(r),str=document.getElementById("tc"+r).value,str=str.replace(/,/g,""),iseqn[r]==1&&(str=str.replace(/(.*)=(.*)/,"$1-($2)")),fl=flist[r],varlist=vlist[r],vars=varlist.split("|"),j=0;j<vars.length;j++)vars[j].charCodeAt(0)>96?arraysearch(vars[j].toUpperCase(),vars)==-1&&(vars[j]=vars[j].toLowerCase(),str=str.replace(new RegExp(vars[j],"gi"),vars[j])):arraysearch(vars[j].toLowerCase(),vars)==-1&&(vars[j]=vars[j].toLowerCase(),str=str.replace(new RegExp(vars[j],"gi"),vars[j]));for(varlist=vars.join("|"),fl!=""&&(reg=new RegExp("("+fl+")\\(","g"),str=str.replace(reg,"$1*sin($1+"),varlist=varlist+"|"+fl),vars=varlist.split("|"),o=document.getElementById("qn"+r),o.value=mathjs(str,varlist),ptlist=pts[r].split(","),vals=[],fj=0;fj<ptlist.length;fj++){for(inputs=ptlist[fj].split("~"),totest="",e=0;e<inputs.length;e++)totest+="var "+vars[e]+"="+inputs[e]+";";totest+=o.value==""?Math.random()+";":o.value+";";try{with(Math)vals[fj]=scopedeval(totest)}catch(c){vals[fj]=NaN}}document.getElementById("qn"+r+"-vals").value=vals.join(",")}return!0}function scopedeval(c){var res;with(Math)res=eval(c);return res}function arraysearch(n,t){for(var i=0;i<t.length;i++)if(t[i]==n)return i;return-1}function toggleinlinebtn(n,t){var r=document.getElementById(n),u,i;r.style.display=r.style.display=="none"?"":"none",t!=null&&(u=document.getElementById(t),i=u.innerHTML,u.innerHTML=i.match(/\+/)?i.replace(/\+/,"-"):i.replace(/\-/,"+"))}function assessbackgsubmit(n,t){var u,f,r,i;if(t!=null&&document.getElementById(t).innerHTML==_("Submitting..."))return!1;if(window.XMLHttpRequest?req=new XMLHttpRequest:window.ActiveXObject&&(req=new ActiveXObject("Microsoft.XMLHTTP")),typeof req!="undefined"){if(typeof tinyMCE!="undefined"&&tinyMCE.triggerSave(),doonsubmit(),params="embedpostback=true",n!=null){for(r=[],u=document.getElementsByTagName("input"),i=0;i<u.length;i++)r.push(u[i]);for(u=document.getElementsByTagName("select"),i=0;i<u.length;i++)r.push(u[i]);for(u=document.getElementsByTagName("textarea"),i=0;i<u.length;i++)r.push(u[i]);for(f=new RegExp("^(qn|tc)("+n+"\\b|"+(n+1)+"\\d{3})"),i=0;i<r.length;i++)r[i].name.match(f)&&(r[i].type!="radio"&&r[i].type!="checkbox"||r[i].checked)&&(params+="&"+r[i].name+"="+encodeURIComponent(r[i].value));params+="&toscore="+n,params+="&verattempts="+document.getElementById("verattempts"+n).value}else{for(r=document.getElementsByTagName("input"),i=0;i<r.length;i++)r[i].name.match(/^(qn|tc)/)&&(r[i].type!="radio"||r[i].type!="checkbox"||r[i].checked)&&(params+="&"+r[i].name+"="+encodeURIComponent(r[i].value));params+="&verattempts="+document.getElementById("verattempts").value}params+="&asidverify="+document.getElementById("asidverify").value,params+="&disptime="+document.getElementById("disptime").value,params+="&isreview="+document.getElementById("isreview").value,t!=null&&(document.getElementById(t).innerHTML=_("Submitting...")),req.open("POST",assesspostbackurl,!0),req.setRequestHeader("Content-type","application/x-www-form-urlencoded"),req.setRequestHeader("Content-length",params.length),req.setRequestHeader("Connection","close"),req.onreadystatechange=function(){assessbackgsubmitCallback(n,t)},req.send(params)}else t!=null&&(document.getElementById(t).innerHTML=_("Error Submitting."))}function assessbackgsubmitCallback(qn,noticetgt){var scripts,resptxt,i,foo,pagescroll,B,D,elpos;if(req.readyState==4)if(req.status==200){if(noticetgt!=null&&(document.getElementById(noticetgt).innerHTML=""),qn!=null){for(scripts=[],resptxt=req.responseText;resptxt.indexOf("<script")>-1||resptxt.indexOf("</script")>-1;){var s=resptxt.indexOf("<script"),s_e=resptxt.indexOf(">",s),e=resptxt.indexOf("</script",s),e_e=resptxt.indexOf(">",e);scripts.push(resptxt.substring(s_e+1,e)),resptxt=resptxt.substring(0,s)+resptxt.substring(e_e+1)}for(document.getElementById("embedqwrapper"+qn).innerHTML=resptxt,usingASCIIMath&&rendermathnode(document.getElementById("embedqwrapper"+qn)),usingASCIISvg&&setTimeout("drawPics()",100),usingTinymceEditor&&initeditor("textareas","mceEditor"),initstack.length=0,i=0;i<scripts.length;i++)try{(k=scripts[i].match(/canvases\[(\d+)\]/))&&(typeof G_vmlCanvasManager!="undefined"&&(scripts[i]=scripts[i]+'G_vmlCanvasManager.initElement(document.getElementById("canvas'+k[1]+'"));'),scripts[i]=scripts[i]+"initCanvases("+k[1]+");"),eval(scripts[i])}catch(ex){}for(i=0;i<initstack.length;i++)foo=initstack[i]();initcreditboxes(),pagescroll=0,typeof window.pageYOffset!="undefined"?pagescroll=window.pageYOffset:(B=document.body,D=document.documentElement,D=D.clientHeight?D:B,pagescroll=D.scrollTop),elpos=findPos(document.getElementById("embedqwrapper"+qn))[1],pagescroll>elpos&&setTimeout(function(){window.scroll(0,elpos)},150)}}else noticetgt!=null&&(document.getElementById(noticetgt).innerHTML=_("Submission Error")+":\n"+req.status+"\n"+req.statusText)}function AutoSuggest(n,t){var r=this,f;this.elem=n,this.suggestions=t,this.eligible=[],this.inputText=null,this.highlighted=-1,this.div=document.getElementById("autosuggest"),this.div==null&&(this.div=document.createElement("div"),this.div.id="autosuggest",document.getElementsByTagName("body")[0].appendChild(this.div),this.div.appendChild(document.createElement("ul")));var o=9,s=27,e=38,u=40,h=13;n.setAttribute("autocomplete","off"),n.id||(f="autosuggest"+AutoSuggestIdCounter,AutoSuggestIdCounter++,n.id=f),n.onkeydown=function(n){var t=r.getKeyCode(n);switch(t){case o:r.useSuggestion("tab");break;case h:return r.useSuggestion("enter"),!1;case s:r.hideDiv();break;case e:r.highlighted>0&&r.highlighted--,r.changeHighlight(t);break;case u:r.highlighted<r.eligible.length-1&&r.highlighted++,r.changeHighlight(t)}},n.onkeyup=function(n){var t=r.getKeyCode(n);switch(t){case o:case s:case e:case u:return;default:this.value.length>1?(r.inputText=this.value,r.getEligible(),r.highlighted=r.eligible.length>0?0:-1,r.createDiv(),r.positionDiv(),r.showDiv()):(r.hideDiv(),this.value.length==0&&(r.inputText=""))}},n.onblur=function(){setTimeout(r.hideDiv,100)},this.useSuggestion=function(){this.highlighted>-1?(this.elem.value=this.eligible[this.highlighted],this.hideDiv()):this.hideDiv()},this.showDiv=function(){this.div.style.display="block"},this.hideDiv=function(){r.div.style.display="none",r.highlighted=-1},this.changeHighlight=function(){var t=this.div.getElementsByTagName("LI"),n;for(i in t)n=t[i],n.className=this.highlighted==i?"selected":""},this.positionDiv=function(){var t=this.elem,n=findPos(t);n[1]+=t.offsetHeight,this.div.style.left=n[0]+"px",this.div.style.top=n[1]+"px"},this.createDiv=function(){var t=document.createElement("ul");for(i in this.eligible){var f=this.eligible[i],u=document.createElement("li"),n=document.createElement("a");n.href="#",n.onclick=function(){return!1},n.innerHTML=f,u.appendChild(n),r.highlighted==i&&(u.className="selected"),t.appendChild(u)}this.div.replaceChild(t,this.div.childNodes[0]),t.onmouseover=function(n){for(var t=r.getEventSource(n),u,f;t.parentNode&&t.tagName.toUpperCase()!="LI";)t=t.parentNode;u=r.div.getElementsByTagName("LI");for(i in u)if(f=u[i],f==t){r.highlighted=i;break}r.changeHighlight()},t.onclick=function(n){return r.useSuggestion("click"),r.hideDiv(),r.cancelEvent(n),!1},this.div.className="suggestion_list",this.div.style.position="absolute"},this.getEligible=function(){var t,r,n;if(this.eligible=[],t=",",this.inputText.indexOf(" ")==-1){r=new RegExp("\\b"+this.inputText.toLowerCase());for(i in this.suggestions)n=this.suggestions[i],n.toLowerCase().match(r)&&(this.eligible[this.eligible.length]=n,t+=i+",")}},this.getKeyCode=function(n){return n?n.keyCode:window.event?window.event.keyCode:void 0},this.getEventSource=function(n){return n?n.target:window.event?window.event.srcElement:void 0},this.cancelEvent=function(n){n&&(n.preventDefault(),n.stopPropagation()),window.event&&(window.event.returnValue=!1)}}function isBlank(n){return!n||0===n.length||/^\s*$/.test(n)}function editdebit(n){var t=$("#qn"+(n.id.substr(2)*1-1));!isBlank(n.value)&&t.hasClass("iscredit")&&(t.is("select")?t.css("margin-right",20):t.width(t.width()+20),t.css("padding-left",0),t.removeClass("iscredit"))}function editcredit(n){var t=$("#qn"+(n.id.substr(2)*1-2));isBlank(n.value)||t.hasClass("iscredit")||(t.is("select")?t.css("margin-right",0):t.width(t.width()-20),t.css("padding-left",20),t.addClass("iscredit"))}function initcreditboxes(){$(".creditbox").each(function(n,t){if(!isBlank(t.value)&&$(t).css("padding-left")!=20){var i=$("#qn"+(t.id.substr(2)*1-2));i.is("select")?i.css("margin-right",0):i.width(i.width()-20),i.css("padding-left",20),i.addClass("iscredit")}})}var greekletters=["alpha","beta","delta","epsilon","gamma","phi","psi","sigma","rho","theta","lambda","mu","nu"],calctoproc={},intcalctoproc={},calcformat={},functoproc={},matcalctoproc={},ntupletoproc={},complextoproc={},callbackstack={},matsize={},vlist={},flist={},pts={},iseqn={},AutoSuggestIdCounter=0;initstack.push(initcreditboxes);