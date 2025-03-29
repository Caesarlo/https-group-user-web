<script setup lang="ts">
interface Element {
    atomic: number;
    symbol: string;
    name: string;
    weight: string;
    classes: string[];
    state: 'Solid' | 'Liquid' | 'Gas' | 'UnknownState';
    isUnstable?: boolean;
}

const elements: Element[] = [
    // 第一周期
    { atomic: 1, symbol: 'H', name: '氢', weight: '1.008', classes: ['Nonmetal', 's'], state: 'Gas' },
    { atomic: 2, symbol: 'He', name: '氦', weight: '4.0026', classes: ['Noble', 's'], state: 'Gas' },

    // 第二周期
    { atomic: 3, symbol: 'Li', name: '锂', weight: '6.94', classes: ['Alkali', 's'], state: 'Solid' },
    { atomic: 4, symbol: 'Be', name: '铍', weight: '9.0122', classes: ['Alkaline', 's'], state: 'Solid' },
    { atomic: 5, symbol: 'B', name: '硼', weight: '10.81', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 6, symbol: 'C', name: '碳', weight: '12.011', classes: ['Nonmetal', 'p'], state: 'Solid' },
    { atomic: 7, symbol: 'N', name: '氮', weight: '14.007', classes: ['Nonmetal', 'p'], state: 'Gas' },
    { atomic: 8, symbol: 'O', name: '氧', weight: '15.999', classes: ['Nonmetal', 'p'], state: 'Gas' },
    { atomic: 9, symbol: 'F', name: '氟', weight: '18.998', classes: ['Nonmetal', 'p'], state: 'Gas' },
    { atomic: 10, symbol: 'Ne', name: '氖', weight: '20.180', classes: ['Noble', 'p'], state: 'Gas' },

    // 第三周期
    { atomic: 11, symbol: 'Na', name: '钠', weight: '22.990', classes: ['Alkali', 's'], state: 'Solid' },
    { atomic: 12, symbol: 'Mg', name: '镁', weight: '24.305', classes: ['Alkaline', 's'], state: 'Solid' },
    { atomic: 13, symbol: 'Al', name: '铝', weight: '26.982', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 14, symbol: 'Si', name: '硅', weight: '28.085', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 15, symbol: 'P', name: '磷', weight: '30.974', classes: ['Nonmetal', 'p'], state: 'Solid' },
    { atomic: 16, symbol: 'S', name: '硫', weight: '32.06', classes: ['Nonmetal', 'p'], state: 'Solid' },
    { atomic: 17, symbol: 'Cl', name: '氯', weight: '35.45', classes: ['Nonmetal', 'p'], state: 'Gas' },
    { atomic: 18, symbol: 'Ar', name: '氩', weight: '39.948', classes: ['Noble', 'p'], state: 'Gas' },

    // 第四周期
    { atomic: 19, symbol: 'K', name: '钾', weight: '39.098', classes: ['Alkali', 's'], state: 'Solid' },
    { atomic: 20, symbol: 'Ca', name: '钙', weight: '40.078', classes: ['Alkaline', 's'], state: 'Solid' },
    { atomic: 21, symbol: 'Sc', name: '钪', weight: '44.956', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 22, symbol: 'Ti', name: '钛', weight: '47.867', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 23, symbol: 'V', name: '钒', weight: '50.942', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 24, symbol: 'Cr', name: '铬', weight: '51.996', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 25, symbol: 'Mn', name: '锰', weight: '54.938', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 26, symbol: 'Fe', name: '铁', weight: '55.845', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 27, symbol: 'Co', name: '钴', weight: '58.933', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 28, symbol: 'Ni', name: '镍', weight: '58.693', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 29, symbol: 'Cu', name: '铜', weight: '63.546', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 30, symbol: 'Zn', name: '锌', weight: '65.38', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 31, symbol: 'Ga', name: '镓', weight: '69.723', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 32, symbol: 'Ge', name: '锗', weight: '72.630', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 33, symbol: 'As', name: '砷', weight: '74.922', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 34, symbol: 'Se', name: '硒', weight: '78.971', classes: ['Nonmetal', 'p'], state: 'Solid' },
    { atomic: 35, symbol: 'Br', name: '溴', weight: '79.904', classes: ['Nonmetal', 'p'], state: 'Liquid' },
    { atomic: 36, symbol: 'Kr', name: '氪', weight: '83.798', classes: ['Noble', 'p'], state: 'Gas' },

    // 第五周期
    { atomic: 37, symbol: 'Rb', name: '铷', weight: '85.468', classes: ['Alkali', 's'], state: 'Solid' },
    { atomic: 38, symbol: 'Sr', name: '锶', weight: '87.62', classes: ['Alkaline', 's'], state: 'Solid' },
    { atomic: 39, symbol: 'Y', name: '钇', weight: '88.906', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 40, symbol: 'Zr', name: '锆', weight: '91.224', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 41, symbol: 'Nb', name: '铌', weight: '92.906', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 42, symbol: 'Mo', name: '钼', weight: '95.95', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 43, symbol: 'Tc', name: '锝', weight: '98', classes: ['Transition', 'd'], state: 'Solid', isUnstable: true },
    { atomic: 44, symbol: 'Ru', name: '钌', weight: '101.07', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 45, symbol: 'Rh', name: '铑', weight: '102.91', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 46, symbol: 'Pd', name: '钯', weight: '106.42', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 47, symbol: 'Ag', name: '银', weight: '107.87', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 48, symbol: 'Cd', name: '镉', weight: '112.41', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 49, symbol: 'In', name: '铟', weight: '114.82', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 50, symbol: 'Sn', name: '锡', weight: '118.71', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 51, symbol: 'Sb', name: '锑', weight: '121.76', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 52, symbol: 'Te', name: '碲', weight: '127.60', classes: ['Metalloid', 'p'], state: 'Solid' },
    { atomic: 53, symbol: 'I', name: '碘', weight: '126.90', classes: ['Nonmetal', 'p'], state: 'Solid' },
    { atomic: 54, symbol: 'Xe', name: '氙', weight: '131.29', classes: ['Noble', 'p'], state: 'Gas' },

    // 第六周期
    { atomic: 55, symbol: 'Cs', name: '铯', weight: '132.91', classes: ['Alkali', 's'], state: 'Solid' },
    { atomic: 56, symbol: 'Ba', name: '钡', weight: '137.33', classes: ['Alkaline', 's'], state: 'Solid' },
    { atomic: 57, symbol: 'La', name: '镧', weight: '138.91', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 58, symbol: 'Ce', name: '铈', weight: '140.12', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 59, symbol: 'Pr', name: '镨', weight: '140.91', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 60, symbol: 'Nd', name: '钕', weight: '144.24', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 61, symbol: 'Pm', name: '钷', weight: '145', classes: ['Lanthanoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 62, symbol: 'Sm', name: '钐', weight: '150.36', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 63, symbol: 'Eu', name: '铕', weight: '151.96', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 64, symbol: 'Gd', name: '钆', weight: '157.25', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 65, symbol: 'Tb', name: '铽', weight: '158.93', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 66, symbol: 'Dy', name: '镝', weight: '162.50', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 67, symbol: 'Ho', name: '钬', weight: '164.93', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 68, symbol: 'Er', name: '铒', weight: '167.26', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 69, symbol: 'Tm', name: '铥', weight: '168.93', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 70, symbol: 'Yb', name: '镱', weight: '173.05', classes: ['Lanthanoid', 'f'], state: 'Solid' },
    { atomic: 71, symbol: 'Lu', name: '镥', weight: '174.97', classes: ['Lanthanoid', 'd'], state: 'Solid' },
    { atomic: 72, symbol: 'Hf', name: '铪', weight: '178.49', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 73, symbol: 'Ta', name: '钽', weight: '180.95', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 74, symbol: 'W', name: '钨', weight: '183.84', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 75, symbol: 'Re', name: '铼', weight: '186.21', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 76, symbol: 'Os', name: '锇', weight: '190.23', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 77, symbol: 'Ir', name: '铱', weight: '192.22', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 78, symbol: 'Pt', name: '铂', weight: '195.08', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 79, symbol: 'Au', name: '金', weight: '196.97', classes: ['Transition', 'd'], state: 'Solid' },
    { atomic: 80, symbol: 'Hg', name: '汞', weight: '200.59', classes: ['Transition', 'd'], state: 'Liquid' },
    { atomic: 81, symbol: 'Tl', name: '铊', weight: '204.38', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 82, symbol: 'Pb', name: '铅', weight: '207.2', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 83, symbol: 'Bi', name: '铋', weight: '208.98', classes: ['Poor', 'p'], state: 'Solid' },
    { atomic: 84, symbol: 'Po', name: '钋', weight: '209', classes: ['Poor', 'p'], state: 'Solid', isUnstable: true },
    { atomic: 85, symbol: 'At', name: '砹', weight: '210', classes: ['Metalloid', 'p'], state: 'Solid', isUnstable: true },
    { atomic: 86, symbol: 'Rn', name: '氡', weight: '222', classes: ['Noble', 'p'], state: 'Gas', isUnstable: true },

    // 第七周期
    { atomic: 87, symbol: 'Fr', name: '钫', weight: '223', classes: ['Alkali', 's'], state: 'Solid', isUnstable: true },
    { atomic: 88, symbol: 'Ra', name: '镭', weight: '226', classes: ['Alkaline', 's'], state: 'Solid', isUnstable: true },
    { atomic: 89, symbol: 'Ac', name: '锕', weight: '227', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 90, symbol: 'Th', name: '钍', weight: '232.04', classes: ['Actinoid', 'f'], state: 'Solid' },
    { atomic: 91, symbol: 'Pa', name: '镤', weight: '231.04', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 92, symbol: 'U', name: '铀', weight: '238.03', classes: ['Actinoid', 'f'], state: 'Solid' },
    { atomic: 93, symbol: 'Np', name: '镎', weight: '237', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 94, symbol: 'Pu', name: '钚', weight: '244', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 95, symbol: 'Am', name: '镅', weight: '243', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 96, symbol: 'Cm', name: '锔', weight: '247', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 97, symbol: 'Bk', name: '锫', weight: '247', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 98, symbol: 'Cf', name: '锎', weight: '251', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 99, symbol: 'Es', name: '锿', weight: '252', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 100, symbol: 'Fm', name: '镄', weight: '257', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 101, symbol: 'Md', name: '钔', weight: '258', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 102, symbol: 'No', name: '锘', weight: '259', classes: ['Actinoid', 'f'], state: 'Solid', isUnstable: true },
    { atomic: 103, symbol: 'Lr', name: '铹', weight: '266', classes: ['Actinoid', 'd'], state: 'Solid', isUnstable: true },
    { atomic: 104, symbol: 'Rf', name: '𬬻', weight: '267', classes: ['Transition', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 105, symbol: 'Db', name: '𬭊', weight: '268', classes: ['Transition', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 106, symbol: 'Sg', name: '𬭳', weight: '269', classes: ['Transition', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 107, symbol: 'Bh', name: '𬭛', weight: '270', classes: ['Transition', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 108, symbol: 'Hs', name: '𬭶', weight: '277', classes: ['Transition', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 109, symbol: 'Mt', name: '鿏', weight: '278', classes: ['Unknown', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 110, symbol: 'Ds', name: '𫟼', weight: '281', classes: ['Unknown', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 111, symbol: 'Rg', name: '𬬭', weight: '282', classes: ['Unknown', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 112, symbol: 'Cn', name: '鿔', weight: '285', classes: ['Unknown', 'd'], state: 'UnknownState', isUnstable: true },
    { atomic: 113, symbol: 'Nh', name: '鿭', weight: '286', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true },
    { atomic: 114, symbol: 'Fl', name: '𫓧', weight: '289', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true },
    { atomic: 115, symbol: 'Mc', name: '镆', weight: '290', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true },
    { atomic: 116, symbol: 'Lv', name: '𫟷', weight: '293', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true },
    { atomic: 117, symbol: 'Ts', name: '鿬', weight: '294', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true },
    { atomic: 118, symbol: 'Og', name: '鿫', weight: '294', classes: ['Unknown', 'p'], state: 'UnknownState', isUnstable: true }
];

const getElementClasses = (element: Element) => {
    return [...element.classes, element.state].join(' ');
};
</script>

<template>
    <div class="ptable-container">
        <div class="ptable-header">
            <div class="Group"></div>
            <div class="Group" data-num="1">1</div>
            <div class="Group" data-num="2">2</div>
            <div class="Group G3" data-num="3">3</div>
            <div class="Group" data-num="4">4</div>
            <div class="Group" data-num="5">5</div>
            <div class="Group" data-num="6">6</div>
            <div class="Group" data-num="7">7</div>
            <div class="Group" data-num="8">8</div>
            <div class="Group" data-num="9">9</div>
            <div class="Group" data-num="10">10</div>
            <div class="Group" data-num="11">11</div>
            <div class="Group" data-num="12">12</div>
            <div class="Group" data-num="13">13</div>
            <div class="Group" data-num="14">14</div>
            <div class="Group" data-num="15">15</div>
            <div class="Group" data-num="16">16</div>
            <div class="Group" data-num="17">17</div>
            <div class="Group" data-num="18">18</div>

        </div>
    </div>
</template>

<style scoped>
.ptable-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background-color: rgba(111, 111, 126, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 20px;
    border-radius: 10px;
    border: 1px solid rgba(100, 103, 148, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
}

.ptable-header {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

.Group {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    /* background-color: rgba(100, 103, 148, 0.2); */
    /* border-radius: 10px; */
    /* border: 1px solid rgba(100, 103, 148, 0.2); */
    padding: 10px;
    margin: 1px;
    aspect-ratio: 1;
    width: calc((100% - 380px) / 19);
    min-width: 40px;
    max-width: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
