System.register(["./index-legacy-CDBmiVQf.js"],(function(e,i){"use strict";var t,n,l,a,s,r,o;return{setters:[e=>{t=e.R,n=e.i,l=e.l,a=e.o,s=e.e,r=e.a,o=e.T}],execute:function(){e({getAllWindows:_,getCurrentWindow:p});class i{constructor(e,i){this.type="Logical",this.width=e,this.height=i}toPhysical(e){return new u(this.width*e,this.height*e)}}e("LogicalSize",i);class u{constructor(e,i){this.type="Physical",this.width=e,this.height=i}toLogical(e){return new i(this.width/e,this.height/e)}}e("PhysicalSize",u);class c{constructor(e,i){this.type="Logical",this.x=e,this.y=i}toPhysical(e){return new h(this.x*e,this.x*e)}}e("LogicalPosition",c);class h{constructor(e,i){this.type="Physical",this.x=e,this.y=i}toLogical(e){return new c(this.x/e,this.y/e)}}e("PhysicalPosition",h);class d extends t{constructor(e){super(e)}static async new(e,i,t){return n("plugin:image|new",{rgba:w(e),width:i,height:t}).then((e=>new d(e)))}static async fromBytes(e){return n("plugin:image|from_bytes",{bytes:w(e)}).then((e=>new d(e)))}static async fromPath(e){return n("plugin:image|from_path",{path:e}).then((e=>new d(e)))}async rgba(){return n("plugin:image|rgba",{rid:this.rid}).then((e=>new Uint8Array(e)))}async size(){return n("plugin:image|size",{rid:this.rid})}}function w(e){return null==e?null:"string"==typeof e?e:e instanceof d?e.rid:e}var b,y;e("UserAttentionType",b),function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"}(b||e("UserAttentionType",b={}));class g{constructor(e){this._preventDefault=!1,this.event=e.event,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}function p(){return new v(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function _(){return n("plugin:window|get_all_windows").then((e=>e.map((e=>new v(e,{skip:!0})))))}e("CloseRequestedEvent",g),e("ProgressBarStatus",y),function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"}(y||e("ProgressBarStatus",y={}));const m=["tauri://created","tauri://error"];class v{constructor(e,i={}){var t;this.label=e,this.listeners=Object.create(null),(null==i?void 0:i.skip)||n("plugin:window|create",{options:{...i,parent:"string"==typeof i.parent?i.parent:null===(t=i.parent)||void 0===t?void 0:t.label,label:e}}).then((async()=>this.emit("tauri://created"))).catch((async e=>this.emit("tauri://error",e)))}static async getByLabel(e){var i;return null!==(i=(await _()).find((i=>i.label===e)))&&void 0!==i?i:null}static getCurrent(){return p()}static async getAll(){return _()}static async getFocusedWindow(){for(const e of await _())if(await e.isFocused())return e;return null}async listen(e,i){return this._handleTauriEvent(e,i)?()=>{const t=this.listeners[e];t.splice(t.indexOf(i),1)}:l(e,i,{target:{kind:"Window",label:this.label}})}async once(e,i){return this._handleTauriEvent(e,i)?()=>{const t=this.listeners[e];t.splice(t.indexOf(i),1)}:a(e,i,{target:{kind:"Window",label:this.label}})}async emit(e,i){if(!m.includes(e))return s(e,i);for(const t of this.listeners[e]||[])t({event:e,id:-1,payload:i})}async emitTo(e,i,t){if(!m.includes(i))return r(e,i,t);for(const n of this.listeners[i]||[])n({event:i,id:-1,payload:t})}_handleTauriEvent(e,i){return!!m.includes(e)&&(e in this.listeners?this.listeners[e].push(i):this.listeners[e]=[i],!0)}async scaleFactor(){return n("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return n("plugin:window|inner_position",{label:this.label}).then((({x:e,y:i})=>new h(e,i)))}async outerPosition(){return n("plugin:window|outer_position",{label:this.label}).then((({x:e,y:i})=>new h(e,i)))}async innerSize(){return n("plugin:window|inner_size",{label:this.label}).then((({width:e,height:i})=>new u(e,i)))}async outerSize(){return n("plugin:window|outer_size",{label:this.label}).then((({width:e,height:i})=>new u(e,i)))}async isFullscreen(){return n("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return n("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return n("plugin:window|is_maximized",{label:this.label})}async isFocused(){return n("plugin:window|is_focused",{label:this.label})}async isDecorated(){return n("plugin:window|is_decorated",{label:this.label})}async isResizable(){return n("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return n("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return n("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return n("plugin:window|is_closable",{label:this.label})}async isVisible(){return n("plugin:window|is_visible",{label:this.label})}async title(){return n("plugin:window|title",{label:this.label})}async theme(){return n("plugin:window|theme",{label:this.label})}async center(){return n("plugin:window|center",{label:this.label})}async requestUserAttention(e){let i=null;return e&&(i=e===b.Critical?{type:"Critical"}:{type:"Informational"}),n("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(e){return n("plugin:window|set_resizable",{label:this.label,value:e})}async setEnabled(e){return n("plugin:window|set_enabled",{label:this.label,value:e})}async isEnabled(){return n("plugin:window|is_enabled",{label:this.label})}async setMaximizable(e){return n("plugin:window|set_maximizable",{label:this.label,value:e})}async setMinimizable(e){return n("plugin:window|set_minimizable",{label:this.label,value:e})}async setClosable(e){return n("plugin:window|set_closable",{label:this.label,value:e})}async setTitle(e){return n("plugin:window|set_title",{label:this.label,value:e})}async maximize(){return n("plugin:window|maximize",{label:this.label})}async unmaximize(){return n("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return n("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return n("plugin:window|minimize",{label:this.label})}async unminimize(){return n("plugin:window|unminimize",{label:this.label})}async show(){return n("plugin:window|show",{label:this.label})}async hide(){return n("plugin:window|hide",{label:this.label})}async close(){return n("plugin:window|close",{label:this.label})}async destroy(){return n("plugin:window|destroy",{label:this.label})}async setDecorations(e){return n("plugin:window|set_decorations",{label:this.label,value:e})}async setShadow(e){return n("plugin:window|set_shadow",{label:this.label,value:e})}async setEffects(e){return n("plugin:window|set_effects",{label:this.label,value:e})}async clearEffects(){return n("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(e){return n("plugin:window|set_always_on_top",{label:this.label,value:e})}async setAlwaysOnBottom(e){return n("plugin:window|set_always_on_bottom",{label:this.label,value:e})}async setContentProtected(e){return n("plugin:window|set_content_protected",{label:this.label,value:e})}async setSize(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");const i={};return i[`${e.type}`]={width:e.width,height:e.height},n("plugin:window|set_size",{label:this.label,value:i})}async setMinSize(e){if(e&&"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");let i=null;return e&&(i={},i[`${e.type}`]={width:e.width,height:e.height}),n("plugin:window|set_min_size",{label:this.label,value:i})}async setMaxSize(e){if(e&&"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");let i=null;return e&&(i={},i[`${e.type}`]={width:e.width,height:e.height}),n("plugin:window|set_max_size",{label:this.label,value:i})}async setSizeConstraints(e){function i(e){return e?{Logical:e}:null}return n("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(null==e?void 0:e.minWidth),minHeight:i(null==e?void 0:e.minHeight),maxWidth:i(null==e?void 0:e.maxWidth),maxHeight:i(null==e?void 0:e.maxHeight)}})}async setPosition(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");const i={};return i[`${e.type}`]={x:e.x,y:e.y},n("plugin:window|set_position",{label:this.label,value:i})}async setFullscreen(e){return n("plugin:window|set_fullscreen",{label:this.label,value:e})}async setFocus(){return n("plugin:window|set_focus",{label:this.label})}async setIcon(e){return n("plugin:window|set_icon",{label:this.label,value:w(e)})}async setSkipTaskbar(e){return n("plugin:window|set_skip_taskbar",{label:this.label,value:e})}async setCursorGrab(e){return n("plugin:window|set_cursor_grab",{label:this.label,value:e})}async setCursorVisible(e){return n("plugin:window|set_cursor_visible",{label:this.label,value:e})}async setCursorIcon(e){return n("plugin:window|set_cursor_icon",{label:this.label,value:e})}async setCursorPosition(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");const i={};return i[`${e.type}`]={x:e.x,y:e.y},n("plugin:window|set_cursor_position",{label:this.label,value:i})}async setIgnoreCursorEvents(e){return n("plugin:window|set_ignore_cursor_events",{label:this.label,value:e})}async startDragging(){return n("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(e){return n("plugin:window|start_resize_dragging",{label:this.label,value:e})}async setProgressBar(e){return n("plugin:window|set_progress_bar",{label:this.label,value:e})}async setVisibleOnAllWorkspaces(e){return n("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:e})}async setTitleBarStyle(e){return n("plugin:window|set_title_bar_style",{label:this.label,value:e})}async setTheme(e){return n("plugin:window|set_theme",{label:this.label,value:e})}async onResized(e){return this.listen(o.WINDOW_RESIZED,(i=>{var t;i.payload=(t=i.payload,new u(t.width,t.height)),e(i)}))}async onMoved(e){return this.listen(o.WINDOW_MOVED,(i=>{i.payload=E(i.payload),e(i)}))}async onCloseRequested(e){return this.listen(o.WINDOW_CLOSE_REQUESTED,(async i=>{const t=new g(i);await e(t),t.isPreventDefault()||await this.destroy()}))}async onDragDropEvent(e){const i=await this.listen(o.DRAG_ENTER,(i=>{e({...i,payload:{type:"enter",paths:i.payload.paths,position:E(i.payload.position)}})})),t=await this.listen(o.DRAG_OVER,(i=>{e({...i,payload:{type:"over",position:E(i.payload.position)}})})),n=await this.listen(o.DRAG_DROP,(i=>{e({...i,payload:{type:"drop",paths:i.payload.paths,position:E(i.payload.position)}})})),l=await this.listen(o.DRAG_LEAVE,(i=>{e({...i,payload:{type:"leave"}})}));return()=>{i(),n(),t(),l()}}async onFocusChanged(e){const i=await this.listen(o.WINDOW_FOCUS,(i=>{e({...i,payload:!0})})),t=await this.listen(o.WINDOW_BLUR,(i=>{e({...i,payload:!1})}));return()=>{i(),t()}}async onScaleChanged(e){return this.listen(o.WINDOW_SCALE_FACTOR_CHANGED,e)}async onThemeChanged(e){return this.listen(o.WINDOW_THEME_CHANGED,e)}}var f,z;function E(e){return new h(e.x,e.y)}e("Window",v),e("Effect",f),function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"}(f||e("Effect",f={})),e("EffectState",z),function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"}(z||e("EffectState",z={}))}}}));