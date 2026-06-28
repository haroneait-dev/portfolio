/** Données du projet Labo GSB : plan d'adressage IP + configurations Cisco. */

export const gsbAddressing: {
  vlan: string;
  service: string;
  hosts: number;
  subnet: string;
  mask: string;
  range: string;
}[] = [
  { vlan: "10", service: "Réseau & Système", hosts: 35, subnet: "172.16.1.0/26", mask: "255.255.255.192", range: "172.16.1.1 – 172.16.1.62" },
  { vlan: "20", service: "Direction / DSI", hosts: 15, subnet: "172.16.1.192/27", mask: "255.255.255.224", range: "172.16.1.193 – 172.16.1.222" },
  { vlan: "30", service: "RH / Compta / Juridique", hosts: 45, subnet: "172.16.0.192/26", mask: "255.255.255.192", range: "172.16.0.193 – 172.16.0.254" },
  { vlan: "40", service: "Communication / Rédaction", hosts: 20, subnet: "172.16.1.160/27", mask: "255.255.255.224", range: "172.16.1.161 – 172.16.1.190" },
  { vlan: "50", service: "Développement", hosts: 30, subnet: "172.16.1.64/27", mask: "255.255.255.224", range: "172.16.1.65 – 172.16.1.94" },
  { vlan: "60", service: "Commercial", hosts: 25, subnet: "172.16.1.96/27", mask: "255.255.255.224", range: "172.16.1.97 – 172.16.1.126" },
  { vlan: "70", service: "Labo-Recherche", hosts: 25, subnet: "172.16.1.128/27", mask: "255.255.255.224", range: "172.16.1.129 – 172.16.1.158" },
  { vlan: "80", service: "Cafétéria", hosts: 10, subnet: "172.16.2.0/28", mask: "255.255.255.240", range: "172.16.2.1 – 172.16.2.14" },
  { vlan: "90", service: "Secrétariat Administratif", hosts: 50, subnet: "172.16.0.128/26", mask: "255.255.255.192", range: "172.16.0.129 – 172.16.0.190" },
  { vlan: "150", service: "Visiteurs", hosts: 60, subnet: "172.16.0.0/26", mask: "255.255.255.192", range: "172.16.0.1 – 172.16.0.62" },
  { vlan: "200", service: "Démonstration", hosts: 15, subnet: "172.16.1.224/27", mask: "255.255.255.224", range: "172.16.1.225 – 172.16.1.254" },
  { vlan: "300", service: "Serveurs", hosts: 55, subnet: "172.16.0.64/26", mask: "255.255.255.192", range: "172.16.0.65 – 172.16.0.126" },
];

export type GsbConfig = { id: string; label: string; hostname: string; code: string };

export const gsbConfigs: GsbConfig[] = [
  {
    id: "r1",
    label: "R1 (routeur)",
    hostname: "R1",
    code: `enable
configure terminal
hostname R1

interface GigabitEthernet0/0
 ip nat outside
 ip nat source list R1interface gigabite 0/0 overload
 no shutdown

interface GigabitEthernet0/0.10
 ip nat inside
 encapsulation dot1Q 10
 ip address 172.16.1.62 255.255.255.192
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.20
 ip nat inside
 encapsulation dot1Q 20
 ip address 172.16.1.222 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.30
 ip nat inside
 encapsulation dot1Q 30
 ip address 172.16.0.254 255.255.255.192
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.40
 ip nat inside
 encapsulation dot1Q 40
 ip address 172.16.1.190 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.50
 ip nat inside
 encapsulation dot1Q 50
 ip address 172.16.1.94 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.60
 ip nat inside
 encapsulation dot1Q 60
 ip address 172.16.1.126 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.70
 ip nat inside
 encapsulation dot1Q 70
 ip address 172.16.1.158 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.80
 ip nat inside
 encapsulation dot1Q 80
 ip address 172.16.2.14 255.255.255.240
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.90
 ip nat inside
 encapsulation dot1Q 90
 ip address 172.16.0.190 255.255.255.192
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.150
 ip nat inside
 encapsulation dot1Q 150
 ip address 172.16.0.62 255.255.255.192
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.200
 encapsulation dot1Q 200
 ip address 172.16.1.254 255.255.255.224
 ip helper-address 172.16.0.125

interface GigabitEthernet0/0.300
 ip nat inside
 encapsulation dot1Q 300
 ip address 172.16.0.126 255.255.255.192
 ip helper-address 172.16.0.125

router rip
 version 2
 network 172.16.0.0
 network 172.16.0.64
 network 172.16.0.128
 network 172.16.0.192
 network 172.16.1.0
 network 172.16.1.64
 network 172.16.1.96
 network 172.16.1.128
 network 172.16.1.160
 network 172.16.1.192
 network 172.16.1.224
 network 172.16.2.0

end
copy running-config startup-config`,
  },
  {
    id: "sw-central",
    label: "SW-Central",
    hostname: "SW-Centre",
    code: `enable
configure terminal
hostname SW-Centre

vlan 10
 name RESEAU_SYSTEME
vlan 20
 name DIRECTION_DSI
vlan 30
 name RH_COMPTA_JURIDIQUE
vlan 40
 name COMMUNICATION_REDACTION
vlan 50
 name DEVELOPPEMENT
vlan 60
 name COMMERCIAL
vlan 70
 name LABO_RECHERCHE
vlan 80
 name CAFETERIA
vlan 90
 name SECRETARIAT_ADMIN
vlan 150
 name VISITEURS
vlan 200
 name DEMONSTRATION
vlan 300
 name SERVEURS

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

interface range FastEthernet0/1-7
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw1",
    label: "SW1",
    hostname: "SW1",
    code: `enable
configure terminal
hostname SW1

vlan 40
 name COMMUNICATION_REDACTION
vlan 90
 name SECRETARIAT_ADMIN
vlan 150
 name VISITEURS

interface range FastEthernet0/1 - 6
 switchport mode access
 switchport access vlan 40
 no shutdown

interface range FastEthernet0/7 - 12
 switchport mode access
 switchport access vlan 90
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw2",
    label: "SW2",
    hostname: "SW2",
    code: `enable
configure terminal
hostname SW2

vlan 50
 name DEVELOPPEMENT
vlan 60
 name COMMERCIAL
vlan 90
 name SECRETARIAT_ADMIN
vlan 150
 name VISITEURS

interface range FastEthernet0/1 - 6
 switchport mode access
 switchport access vlan 50
 no shutdown

interface range FastEthernet0/7 - 12
 switchport mode access
 switchport access vlan 60
 no shutdown

interface range FastEthernet0/13 - 18
 switchport mode access
 switchport access vlan 90
 no shutdown

interface range FastEthernet0/19 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw3",
    label: "SW3",
    hostname: "SW3",
    code: `enable
configure terminal
hostname SW3

vlan 70
 name LABO_RECHERCHE
vlan 150
 name VISITEURS

interface range FastEthernet0/1 - 12
 switchport mode access
 switchport access vlan 70
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw4",
    label: "SW4",
    hostname: "SW4",
    code: `enable
configure terminal
hostname SW4

vlan 10
 name RESEAU_SYSTEME
vlan 30
 name RH_COMPTA_JURIDIQUE
vlan 150
 name VISITEURS

interface range FastEthernet0/1 - 6
 switchport mode access
 switchport access vlan 10
 no shutdown

interface range FastEthernet0/7 - 12
 switchport mode access
 switchport access vlan 30
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw5",
    label: "SW5",
    hostname: "SW5",
    code: `enable
configure terminal
hostname SW5

vlan 20
 name DIRECTION_DSI
vlan 30
 name RH_COMPTA_JURIDIQUE
vlan 150
 name VISITEURS

interface range FastEthernet0/1 - 6
 switchport mode access
 switchport access vlan 20
 no shutdown

interface range FastEthernet0/7 - 12
 switchport mode access
 switchport access vlan 30
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw6",
    label: "SW6",
    hostname: "SW6",
    code: `enable
configure terminal
hostname SW6

vlan 150
 name VISITEURS
vlan 300
 name SERVEURS

interface range FastEthernet0/1 - 12
 switchport mode access
 switchport access vlan 150
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 300
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "sw-rdc",
    label: "SW-RDC",
    hostname: "SW-RDC",
    code: `enable
configure terminal
hostname SW-RDC

vlan 80
 name CAFETERIA
vlan 150
 name VISITEURS
vlan 200
 name DEMONSTRATION

interface range FastEthernet0/1 - 6
 switchport mode access
 switchport access vlan 200
 no shutdown

interface range FastEthernet0/7 - 12
 switchport mode access
 switchport access vlan 80
 no shutdown

interface range FastEthernet0/13 - 24
 switchport mode access
 switchport access vlan 150
 no shutdown

interface GigabitEthernet0/1
 switchport mode trunk
 no shutdown

end
copy running-config startup-config`,
  },
  {
    id: "acl",
    label: "ACL / Sécurité",
    hostname: "R1 — ACL",
    code: `! ACL 1 — DSI (VLAN 20) ne peut pas accéder à RH/Compta/Juridique (VLAN 30)
access-list 101 deny ip 172.16.1.192 0.0.0.31 172.16.0.192 0.0.0.63
access-list 101 permit ip any any

interface GigabitEthernet0/0.20
 ip access-group 101 in

! ACL 2 — isole Développement (VLAN 50) et Commercial (VLAN 60)
access-list 102 deny ip 172.16.1.64 0.0.0.31 172.16.1.96 0.0.0.31
access-list 102 permit ip any any

interface GigabitEthernet0/0.50
 ip access-group 102 in

interface GigabitEthernet0/0.60
 ip access-group 102 in

! ACL 4 — restreint la Démonstration (VLAN 200)
access-list 104 deny ip 172.16.1.224 0.0.0.31
access-list 104 permit ip any any

interface GigabitEthernet0/0.200
 ip access-group 104 in`,
  },
];
