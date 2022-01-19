const CONTRACT_RATE_CONTROL_ABI = [
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_address", "type": "address"}],
        "name": "is_below_rate_limit",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_address", "type": "address"}],
        "name": "perform_action",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_address", "type": "address"}, {
            "internalType": "uint64",
            "name": "actions_per_interval",
            "type": "uint64"
        }], "name": "set_rate_limit", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]

const CONTRACT_ACCOUNTS_ABI = [
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "uint64", "name": "id", "type": "uint64"}, {
            "indexed": true,
            "internalType": "address",
            "name": "_address",
            "type": "address"
        }, {"indexed": false, "internalType": "string", "name": "username", "type": "string"}],
        "name": "SignUp",
        "type": "event"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "name": "address_by_id",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "id_by_address",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "", "type": "string"}],
        "name": "id_by_username",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "rate_control_address", "type": "address"}],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "rate_control",
        "outputs": [{"internalType": "contract RateControl", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "username", "type": "string"}],
        "name": "sign_up",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "name": "username_by_id",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }];

const CONTRACT_SPACES_ABI = [
    {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "inputs": [{"internalType": "uint64", "name": "a", "type": "uint64"}, {
        "internalType": "uint64",
        "name": "b",
        "type": "uint64"
    }],
    "name": "_encode_two_uint64_as_uint128",
    "outputs": [{"internalType": "uint128", "name": "", "type": "uint128"}],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [],
    "name": "accounts",
    "outputs": [{"internalType": "contract Accounts", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint64", "name": "space", "type": "uint64"}, {
        "internalType": "uint64",
        "name": "account",
        "type": "uint64"
    }], "name": "add_account_to_blacklist", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "name", "type": "string"}],
    "name": "create",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "get_latest_space_index",
    "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "", "type": "string"}],
    "name": "id_by_name",
    "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "accounts_address", "type": "address"}],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint64", "name": "space", "type": "uint64"}, {
        "internalType": "uint64",
        "name": "account",
        "type": "uint64"
    }],
    "name": "is_blacklisted",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "name": "name_by_id",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "name": "owner_by_id",
    "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "rate_control",
    "outputs": [{"internalType": "contract RateControl", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint64", "name": "space", "type": "uint64"}, {
        "internalType": "uint64",
        "name": "account",
        "type": "uint64"
    }], "name": "remove_account_from_blacklist", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];

const CONTRACT_POSTS_ABI = [
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "uint64", "name": "author", "type": "uint64"}, {
            "indexed": false,
            "internalType": "string",
            "name": "message",
            "type": "string"
        }],
        "name": "PostSubmitted",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "uint64", "name": "amount", "type": "uint64"}],
        "name": "Withdrawal",
        "type": "event"
    }, {
        "inputs": [],
        "name": "accounts",
        "outputs": [{"internalType": "contract Accounts", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "author", "type": "uint64"}],
        "name": "get_amount_of_posts_by_author",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "get_latest_post_index",
        "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "author", "type": "uint64"}, {
            "internalType": "uint64",
            "name": "n",
            "type": "uint64"
        }],
        "name": "get_nth_post_index_by_author",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "spaces_address", "type": "address"}],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "name": "mother_post_by_reply",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "name": "posts",
        "outputs": [{"internalType": "string", "name": "message", "type": "string"}, {
            "internalType": "uint64",
            "name": "author",
            "type": "uint64"
        }, {"internalType": "uint64", "name": "timestamp", "type": "uint64"}, {
            "internalType": "uint64",
            "name": "space",
            "type": "uint64"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "posts_by_author",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "posts_by_space",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "rate_control",
        "outputs": [{"internalType": "contract RateControl", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "", "type": "uint64"}, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "replies_by_post",
        "outputs": [{"internalType": "uint64", "name": "", "type": "uint64"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "mother_post", "type": "uint64"}, {
            "internalType": "string",
            "name": "message",
            "type": "string"
        }], "name": "reply", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "spaces",
        "outputs": [{"internalType": "contract Spaces", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint64", "name": "space", "type": "uint64"}, {
            "internalType": "string",
            "name": "message",
            "type": "string"
        }], "name": "submit_post", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]