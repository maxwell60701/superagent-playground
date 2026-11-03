import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,step,action} from '../src/engine.mjs';
test('jump lands on raised platform without falling through it',()=>{const s=createGame();s.enemies=[];s.player.x=350;action(s,'jump');for(let i=0;i<70;i++)step(s,new Set(),1/60);assert.equal(s.player.y,398);assert.equal(s.player.grounded,true);});
test('attack respects direction and cooldown, awards loot on defeat',()=>{const s=createGame();s.player.x=430;action(s,'attack');assert.equal(s.enemies[0].hp,30);assert.equal(action(s,'attack'),false);step(s,new Set(),.04);s.player.attack=0;action(s,'attack');assert.equal(s.kills,1);assert.equal(s.player.gold,15);assert.equal(s.player.xp,25);});
test('skill spends mana and level up restores health',()=>{const s=createGame();s.player.x=430;s.player.xp=75;s.player.hp=30;action(s,'skill');assert.equal(s.player.level,2);assert.equal(s.player.hp,100);assert.equal(s.player.xp,0);s.player.attack=0;s.player.mp=0;assert.equal(action(s,'skill'),false);});
test('potions are finite and cannot be wasted at full health',()=>{const s=createGame();assert.equal(action(s,'potion'),false);s.player.hp=20;assert.equal(action(s,'potion'),true);assert.equal(s.player.hp,70);assert.equal(s.player.potions,4);});
test('contact damage has invincibility window',()=>{const s=createGame();s.player.x=480;step(s,new Set(),.01);assert.equal(s.player.hp,88);step(s,new Set(),.01);assert.equal(s.player.hp,88);});
