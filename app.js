const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {
        attackMonster(){
            let attackStrength = Math.floor(Math.random() * (13 - 5) + 5);
            console.log(attackStrength);
            this.attackPlayer();
        },
        attackPlayer(){
            let monsterAttackStrength = Math.floor(Math.random() * (18 - 8) + 12);
            console.log(monsterAttackStrength);
        }
    },
});

app.mount("#game");
