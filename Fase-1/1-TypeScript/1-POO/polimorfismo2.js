var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Animal2_especie;
var Animal2 = /** @class */ (function () {
    function Animal2(especie) {
        _Animal2_especie.set(this, void 0); // o # indica que o atributo é privado
        __classPrivateFieldSet(this, _Animal2_especie, especie, "f");
    }
    Animal2.prototype.getEspecie = function () {
        return __classPrivateFieldGet(this, _Animal2_especie, "f");
    };
    Animal2.prototype.fazerSom = function () {
        console.log("O animal faz um som");
    };
    return Animal2;
}());
_Animal2_especie = new WeakMap();
;
var Cachorro2 = /** @class */ (function (_super) {
    __extends(Cachorro2, _super);
    function Cachorro2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro2.prototype.fazerSom = function () {
        console.log("Au Au!");
    };
    ;
    return Cachorro2;
}(Animal2));
;
var Macaco2 = /** @class */ (function (_super) {
    __extends(Macaco2, _super);
    function Macaco2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Macaco2.prototype.fazerSom = function () {
        console.log("U Ah Ah!");
    };
    ;
    return Macaco2;
}(Animal2));
;
var meuCatioro2 = new Cachorro2('Cachorro2');
console.log(meuCatioro2.getEspecie());
