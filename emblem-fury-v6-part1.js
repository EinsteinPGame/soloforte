// PART1: HTML head, CSS, HTML body structure
const PART1 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>Emblem Fury V6</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000;overflow:hidden;font-family:'Courier New',monospace;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none}
canvas{display:block}
#ui-layer{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}
#ui-layer *{pointer-events:auto}
.screen-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:100;background:rgba(0,0,0,0.95);overflow-y:auto}
.screen-overlay h1{font-size:3.5rem;margin-bottom:16px;text-shadow:0 0 30px currentColor}
.screen-overlay h2{font-size:1.8rem;margin-bottom:20px;color:#888}
.screen-overlay p{color:#999;margin:4px 0;font-size:1rem}
.screen-overlay button{padding:12px 32px;font-size:1.1rem;font-family:'Courier New',monospace;border:2px solid;border-radius:4px;cursor:pointer;margin:6px;transition:all 0.2s;background:transparent;color:#fff}
.screen-overlay button:hover{transform:scale(1.05)}
.char-select{display:flex;gap:12px;margin:16px 0;flex-wrap:wrap;justify-content:center;max-width:1100px}
.char-card{width:160px;padding:14px;border:2px solid #444;border-radius:8px;cursor:pointer;text-align:center;transition:all 0.3s;background:rgba(20,20,40,0.8)}
.char-card:hover{transform:translateY(-4px)}
.char-card h3{font-size:1.1rem;margin-bottom:8px}
.char-card p{font-size:0.75rem;color:#aaa;line-height:1.35}
.emblem-select{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;max-width:900px}
.emblem-card{width:200px;padding:16px;border:2px solid #555;border-radius:8px;cursor:pointer;text-align:center;transition:all 0.3s;background:rgba(20,20,40,0.9)}
.emblem-card:hover{transform:translateY(-3px);border-color:#fff}
.emblem-card .em-icon{font-size:2.2rem;margin-bottom:6px}
.emblem-card h4{font-size:0.95rem;margin-bottom:4px}
.emblem-card p{font-size:0.72rem;color:#aaa;line-height:1.3}
.buff-card{width:240px;padding:18px;border:2px solid #666;border-radius:8px;cursor:pointer;text-align:center;transition:all 0.3s;background:rgba(20,20,50,0.9);position:relative}
.buff-card:hover{transform:translateY(-3px);border-color:#0f0}
.buff-card p{font-size:0.88rem;color:#ccc;line-height:1.4}
.buff-card .tier-badge{position:absolute;top:8px;right:8px;padding:2px 6px;border-radius:3px;font-size:0.65rem;font-weight:bold}
#inventory-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.93);z-index:90;display:none;overflow-y:auto;padding:20px}
#inventory-screen h2{text-align:center;color:#7b68ee;font-size:1.6rem;margin-bottom:16px}
.inv-section{max-width:900px;margin:0 auto 16px;padding:14px;border:1px solid #333;border-radius:8px;background:rgba(15,15,30,0.8)}
.inv-section h3{color:#00d4ff;margin-bottom:8px;font-size:1rem}
.inv-row{display:flex;gap:8px;flex-wrap:wrap}
.inv-item{padding:7px 12px;border:2px solid #444;border-radius:4px;font-size:0.8rem;color:#ccc;background:rgba(30,30,60,0.5);cursor:pointer;position:relative;transition:border-color 0.2s}
.inv-item:hover{border-color:#7b68ee}
.inv-item:hover .inv-tooltip{display:block}
.inv-item.selected{border-color:#0f0;background:rgba(0,100,0,0.2)}
.inv-item.fuse-selected{border-color:#ff0;background:rgba(80,80,0,0.3)}
.inv-tooltip{display:none;position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:rgba(10,10,30,0.97);border:1px solid #555;border-radius:6px;padding:10px;width:220px;font-size:0.75rem;color:#ddd;z-index:200;pointer-events:none;line-height:1.5}
.inv-tooltip h4{color:#0f0;margin-bottom:4px;font-size:0.82rem}
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.stat-item{padding:5px;text-align:center;border:1px solid #333;border-radius:4px;font-size:0.8rem}
.stat-item .label{color:#888;font-size:0.65rem}
.stat-item .value{color:#0f0;font-size:1rem}
#close-inv{position:fixed;top:14px;right:18px;font-size:1.8rem;cursor:pointer;color:#888;z-index:91}
#close-inv:hover{color:#fff}
.tier-common{border-color:#aaa!important;box-shadow:0 0 4px rgba(170,170,170,0.3)}
.tier-common-plus{border-color:#3a3!important;box-shadow:0 0 4px rgba(50,170,50,0.4)}
.tier-uncommon{border-color:#44f!important;box-shadow:0 0 4px rgba(68,68,255,0.4)}
.tier-uncommon-plus{border-color:#a4f!important;box-shadow:0 0 6px rgba(170,68,255,0.5)}
.tier-rare{border-color:#fa0!important;box-shadow:0 0 8px rgba(255,170,0,0.5)}
.tier-unique{border-color:#f40!important;box-shadow:0 0 10px rgba(255,68,0,0.7);animation:uniqueGlow 1.5s infinite}
@keyframes uniqueGlow{0%,100%{box-shadow:0 0 8px rgba(255,68,0,0.5)}50%{box-shadow:0 0 18px rgba(255,140,0,0.9)}}
.mobile-controls-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:50;pointer-events:none}
.mobile-controls-container *{pointer-events:auto}
.joystick-base{position:fixed;width:120px;height:120px;border:2px solid rgba(255,255,255,0.25);border-radius:50%;background:rgba(255,255,255,0.05)}
.joystick-thumb{width:44px;height:44px;background:rgba(255,255,255,0.4);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
#move-joystick{bottom:30px;left:25px;z-index:51}
#aim-joystick{bottom:30px;right:25px;z-index:51}
#aim-line{position:fixed;pointer-events:none;z-index:49;display:none}
#mobile-skill-btn{position:fixed;bottom:170px;right:35px;width:56px;height:56px;border:2px solid rgba(0,200,255,0.5);border-radius:50%;z-index:52;font-size:0.72rem;color:rgba(0,200,255,0.8);display:flex;align-items:center;justify-content:center;background:rgba(0,50,100,0.3);flex-direction:column;line-height:1.1}
#mobile-skill-btn .cd-overlay{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:rgba(0,0,0,0.6);clip-path:none;pointer-events:none;display:none}
#mobile-ult-btn{position:fixed;bottom:240px;right:35px;width:56px;height:56px;border:2px solid rgba(255,200,0,0.4);border-radius:50%;z-index:52;font-size:0.72rem;color:rgba(255,200,0,0.6);display:flex;align-items:center;justify-content:center;background:rgba(100,80,0,0.2);flex-direction:column;line-height:1.1}
#mobile-ult-btn.charged{border-color:rgba(255,220,0,0.9);color:rgba(255,220,0,1);background:rgba(120,100,0,0.4);animation:ultPulse 1.2s infinite}
#mobile-ult-btn.grayed{opacity:0.4}
#mobile-inv-btn{position:fixed;top:12px;right:12px;width:40px;height:40px;border:1px solid rgba(255,255,255,0.3);border-radius:8px;z-index:52;font-size:0.88rem;color:rgba(255,255,255,0.6);display:flex;align-items:center;justify-content:center;background:rgba(40,40,60,0.5)}
@keyframes ultPulse{0%,100%{box-shadow:0 0 8px rgba(255,200,0,0.3)}50%{box-shadow:0 0 20px rgba(255,200,0,0.7)}}
#ability-announce{position:fixed;top:35%;left:50%;transform:translateX(-50%);font-size:2.5rem;font-weight:bold;font-family:'Courier New',monospace;color:#fff;text-shadow:0 0 20px currentColor;pointer-events:none;z-index:200;opacity:0;transition:opacity 0.2s;text-align:center}
#unpause-countdown{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:8rem;font-weight:bold;font-family:'Courier New',monospace;color:#fff;text-shadow:0 0 40px #fff;pointer-events:none;z-index:300;display:none;text-align:center}
@media(max-width:800px),(pointer:coarse){.mobile-controls-container{display:block}}
</style>
</head>
<body>
<canvas id="game"></canvas>
<div id="ui-layer"></div>
<div id="ability-announce"></div>
<div id="unpause-countdown"></div>`;
console.log("Part 1 length:", PART1.length);
