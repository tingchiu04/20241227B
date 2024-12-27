const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Plugins.Arr,
		C3.Behaviors.DragnDrop,
		C3.Plugins.video,
		C3.Plugins.TextBox,
		C3.Plugins.AJAX,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Text.Cnds.IsVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.video.Cnds.HasEnded,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.video.Acts.Pause,
		C3.Plugins.video.Acts.Play,
		C3.Plugins.Text.Acts.SetPosToObject,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Text.Acts.SetY,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsFlipped,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.TextBox.Acts.SetEnabled,
		C3.Plugins.TextBox.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.TextBox.Cnds.OnTextChanged,
		C3.Plugins.TextBox.Cnds.OnClicked,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.TextBox.Acts.SetMaxLength,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Acts.ScrollX
	];
};
self.C3_JsPropNameTable = [
	{"00主角": 0},
	{"00嘶文先生": 0},
	{"00右鍵": 0},
	{"00右鍵2": 0},
	{"00角色名稱": 0},
	{"00對話文字1": 0},
	{"00透明底": 0},
	{"00小頭像": 0},
	{"00操作對話框": 0},
	{Y1: 0},
	{Y2: 0},
	{"00操作說明文字": 0},
	{"00箭頭": 0},
	{"00點擊": 0},
	{"00對話框": 0},
	{Fade: 0},
	{"00轉暗": 0},
	{"00回到首頁": 0},
	{"00UI說明": 0},
	{X1: 0},
	{Y3: 0},
	{Y4: 0},
	{Y5: 0},
	{Y6: 0},
	{Y7: 0},
	{Y8: 0},
	{"00打開": 0},
	{"00操作說明": 0},
	{"00聲音": 0},
	{"00選單鍵": 0},
	{"00暫停": 0},
	{"00跳過": 0},
	{"00地圖": 0},
	{"00成就": 0},
	{"00了解": 0},
	{"00回上一頁": 0},
	{"00關閉": 0},
	{"10選單按鈕1": 0},
	{"10選單按鈕2": 0},
	{"10選單按鈕3": 0},
	{"10底圖": 0},
	{"10告示牌": 0},
	{"10斯文": 0},
	{"10插牌": 0},
	{"111text": 0},
	{"112底圖": 0},
	{"112右邊底框": 0},
	{"112左邊底框": 0},
	{"112嘶文": 0},
	{"112標題": 0},
	{"112按鈕1": 0},
	{"112按鈕2": 0},
	{"112按鈕3": 0},
	{"112按鈕4": 0},
	{"112按鈕5": 0},
	{"112按鈕6": 0},
	{"121底圖": 0},
	{"121傳單1": 0},
	{"121傳單2": 0},
	{"121傳單3": 0},
	{"121傳單4": 0},
	{"121傳單5": 0},
	{Variable1: 0},
	{"121知識內容": 0},
	{"121提示": 0},
	{"121判斷右": 0},
	{"121判斷左": 0},
	{"121想一想問題": 0},
	{"121答案1": 0},
	{"121答案2": 0},
	{"121想一想問題2": 0},
	{"121想一想答案": 0},
	{"113底圖": 0},
	{"113資料框": 0},
	{"113標題": 0},
	{"113小標": 0},
	{DragDrop: 0},
	{"113長條資料": 0},
	{"113資料框2": 0},
	{"113底圖2": 0},
	{"113窗花": 0},
	{"113綁定": 0},
	{S01操作UI底圖: 0},
	{S02成就底圖: 0},
	{"00封面底圖": 0},
	{"00開始按鈕": 0},
	{"01警語本人": 0},
	{"02警語黑底": 0},
	{"021動畫": 0},
	{"021確認跳過": 0},
	{name: 0},
	{"022半透明底": 0},
	{"022text": 0},
	{"022輸入名字": 0},
	{"022確定": 0},
	{"022輸入": 0},
	{"00對話文字2": 0},
	{"022輸入名字2": 0},
	{"022標語": 0},
	{"03大地圖底色": 0},
	{"03第一章": 0},
	{"03第二章": 0},
	{"03第三章": 0},
	{"03測驗": 0},
	{"03text": 0},
	{"03說明文字1": 0},
	{"03說明文字2": 0},
	{"03說明文字3": 0},
	{"03說明": 0},
	{AJAX: 0},
	{Audio: 0},
	{Browser: 0},
	{Mouse: 0},
	{Touch: 0},
	{廢稿text: 0},
	{"00轉場秒數": 0},
	{"00轉場秒數2": 0},
	{"00small": 0},
	{"00big": 0},
	{talk11: 0},
	{i: 0},
	{"00頁面": 0},
	{"00主角名": 0},
	{"03大地圖操作說明": 0},
	{talk03: 0},
	{talk021: 0},
	{vw: 0},
	{talk12: 0},
	{"11學習內容": 0},
	{"121操作提示": 0}
];

self.InstanceType = {
	_00主角: class extends self.ISpriteInstance {},
	_00嘶文先生: class extends self.ISpriteInstance {},
	_00右鍵: class extends self.ISpriteInstance {},
	_00右鍵2: class extends self.ISpriteInstance {},
	_00角色名稱: class extends self.ITextInstance {},
	_00對話文字1: class extends self.ITextInstance {},
	_00透明底: class extends self.ISpriteInstance {},
	_00小頭像: class extends self.ISpriteInstance {},
	_00操作對話框: class extends self.ISpriteInstance {},
	_00操作說明文字: class extends self.ITextInstance {},
	_00箭頭: class extends self.ISpriteInstance {},
	_00點擊: class extends self.ISpriteInstance {},
	_00對話框: class extends self.ISpriteInstance {},
	_00轉暗: class extends self.ISpriteInstance {},
	_00回到首頁: class extends self.ISpriteInstance {},
	_00UI說明: class extends self.ISpriteInstance {},
	_00打開: class extends self.ISpriteInstance {},
	_00操作說明: class extends self.ISpriteInstance {},
	_00聲音: class extends self.ISpriteInstance {},
	_00選單鍵: class extends self.ISpriteInstance {},
	_00暫停: class extends self.ISpriteInstance {},
	_00跳過: class extends self.ISpriteInstance {},
	_00地圖: class extends self.ISpriteInstance {},
	_00成就: class extends self.ISpriteInstance {},
	_00了解: class extends self.ISpriteInstance {},
	_00回上一頁: class extends self.ISpriteInstance {},
	_00關閉: class extends self.ISpriteInstance {},
	_10選單按鈕1: class extends self.ISpriteInstance {},
	_10選單按鈕2: class extends self.ISpriteInstance {},
	_10選單按鈕3: class extends self.ISpriteInstance {},
	_10底圖: class extends self.ISpriteInstance {},
	_10告示牌: class extends self.ISpriteInstance {},
	_10斯文: class extends self.ISpriteInstance {},
	_10插牌: class extends self.ISpriteInstance {},
	_111text: class extends self.IArrayInstance {},
	_112底圖: class extends self.ISpriteInstance {},
	_112右邊底框: class extends self.ISpriteInstance {},
	_112左邊底框: class extends self.ISpriteInstance {},
	_112嘶文: class extends self.ISpriteInstance {},
	_112標題: class extends self.ISpriteInstance {},
	_112按鈕1: class extends self.ISpriteInstance {},
	_112按鈕2: class extends self.ISpriteInstance {},
	_112按鈕3: class extends self.ISpriteInstance {},
	_112按鈕4: class extends self.ISpriteInstance {},
	_112按鈕5: class extends self.ISpriteInstance {},
	_112按鈕6: class extends self.ISpriteInstance {},
	_121底圖: class extends self.ISpriteInstance {},
	_121傳單1: class extends self.ISpriteInstance {},
	_121傳單2: class extends self.ISpriteInstance {},
	_121傳單3: class extends self.ISpriteInstance {},
	_121傳單4: class extends self.ISpriteInstance {},
	_121傳單5: class extends self.ISpriteInstance {},
	_121知識內容: class extends self.ISpriteInstance {},
	_121提示: class extends self.ISpriteInstance {},
	_121判斷右: class extends self.ISpriteInstance {},
	_121判斷左: class extends self.ISpriteInstance {},
	_121想一想問題: class extends self.ISpriteInstance {},
	_121答案1: class extends self.ISpriteInstance {},
	_121答案2: class extends self.ISpriteInstance {},
	_121想一想問題2: class extends self.ISpriteInstance {},
	_121想一想答案: class extends self.ISpriteInstance {},
	_113底圖: class extends self.ISpriteInstance {},
	_113資料框: class extends self.ISpriteInstance {},
	_113標題: class extends self.ISpriteInstance {},
	_113小標: class extends self.ISpriteInstance {},
	_113長條資料: class extends self.ISpriteInstance {},
	_113資料框2: class extends self.ISpriteInstance {},
	_113底圖2: class extends self.ISpriteInstance {},
	_113窗花: class extends self.ISpriteInstance {},
	_113綁定: class extends self.ISpriteInstance {},
	S01操作UI底圖: class extends self.ISpriteInstance {},
	S02成就底圖: class extends self.ISpriteInstance {},
	_00封面底圖: class extends self.ISpriteInstance {},
	_00開始按鈕: class extends self.ISpriteInstance {},
	_01警語本人: class extends self.ISpriteInstance {},
	_02警語黑底: class extends self.ISpriteInstance {},
	_021動畫: class extends self.IWorldInstance {},
	_021確認跳過: class extends self.ITextInstance {},
	_022半透明底: class extends self.ISpriteInstance {},
	_022text: class extends self.IArrayInstance {},
	_022輸入名字: class extends self.ISpriteInstance {},
	_022確定: class extends self.ISpriteInstance {},
	_022輸入: class extends self.ITextInputInstance {},
	_00對話文字2: class extends self.ITextInstance {},
	_022輸入名字2: class extends self.ISpriteInstance {},
	_022標語: class extends self.ITextInstance {},
	_03大地圖底色: class extends self.ISpriteInstance {},
	_03第一章: class extends self.ISpriteInstance {},
	_03第二章: class extends self.ISpriteInstance {},
	_03第三章: class extends self.ISpriteInstance {},
	_03測驗: class extends self.ISpriteInstance {},
	_03text: class extends self.IArrayInstance {},
	_03說明文字1: class extends self.ITextInstance {},
	_03說明文字2: class extends self.ITextInstance {},
	_03說明文字3: class extends self.ITextInstance {},
	_03說明: class extends self.ISpriteInstance {},
	AJAX: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	廢稿text: class extends self.IArrayInstance {}
}