// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract DBlog {
    struct Seller {
        address payable sellerAddress;
        string message;
        uint256 qty;
    }
    struct Comment {
        string postSlug;
        address payable commenterAddress;
        string commentMessage;
    }
    struct Post {
        uint256 id;
        string slug;
        string coverImgUrl;
        address payable authorAddress;
        string title;
        string content;
        uint256 datePublished;
        address[] likes;
    }

    // State variables
    uint256 private postIndex = 0;
    string[] public slugs; // used to iterater over posts mapping
    Seller[] public sellersList;
    mapping(address => uint256) public balanceSheet;
    mapping(string => Post) public postsMapping;
    mapping(string => Comment[]) public commentsMapping;
    address internal cUsdTokenAddress =
        0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    // create a new user and gift them 5 RPs
    function createNewUser(address _userAddress) public {
        balanceSheet[_userAddress] = 5;
    }

    // create new post
    function createPost(
        string memory _slug,
        string memory _coverImgUrl,
        string memory _title,
        string memory _content,
        uint256 _datePublished
    ) public {
        address[] memory likes;
        slugs.push(_slug);
        postsMapping[_slug] = Post(
            postIndex++,
            _slug,
            _coverImgUrl,
            payable(msg.sender),
            _title,
            _content,
            _datePublished,
            likes
        );
    }

    // get post details using post slug
    function getPost(string memory _slug)
        public
        view
        returns (
            uint256 id,
            string memory slug,
            string memory coverImgUrl,
            address payable authorAddress,
            string memory title,
            string memory content,
            uint256 datePublished,
            address[] memory likes,
            Comment[] memory comments
        )
    {
        Post memory post = postsMapping[_slug];
        id = post.id;
        slug = post.slug;
        coverImgUrl = post.coverImgUrl;
        authorAddress = post.authorAddress;
        title = post.title;
        content = post.content;
        datePublished = post.datePublished;
        likes = post.likes;

        // get comments
        comments = commentsMapping[_slug];
    }

    // delete post with slug @_postSlug
    function removePost(string memory _postSlug) public {
        delete postsMapping[_postSlug];
    }

    // like a post
    function likePost(string memory _postSlug) public {
        postsMapping[_postSlug].likes.push(payable(msg.sender));
    }

    // un-like a post
    function unlikePost(string memory _postSlug) public {
        address[] storage likesArr = postsMapping[_postSlug].likes;
        for (uint256 i = 0; i < likesArr.length; i++) {
            if (likesArr[i] == payable(msg.sender)) {
                // replace the element to delete with the last element in array
                likesArr[i] = likesArr[likesArr.length - 1];
                likesArr.pop(); // remove the last element
                break;
            }
        }
    }

    // buy a coffee
    function buyCoffee(string memory _postSlug, uint256 _amount)
        public
        payable
    {
        require(msg.sender.balance / 1 ether >= _amount, "Insufficent Balance");
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                postsMapping[_postSlug].authorAddress,
                _amount
            ),
            "Transfer failed."
        );
    }

    // make comment on a post
    function makeComment(
        string memory _slug,
        address payable _commenterAddress,
        string memory _commentMessage
    ) public {
        Comment memory newComment = Comment(
            _slug,
            _commenterAddress,
            _commentMessage
        );
        commentsMapping[_slug].push(newComment);
    }

    // put Reading Points (RP) for sell
    function sellRp(string memory _message, uint256 _qty) public {
        // check if user has enough RP(s) in wallet
        require(
            balanceSheet[payable(msg.sender)] >= _qty,
            "Insufficient RPs to sell"
        );
        balanceSheet[payable(msg.sender)] -= _qty; // deduct quantity from sellers balance
        sellersList.push(Seller(payable(msg.sender), _message, _qty)); // add seller to sellers list
    }

    // buy @_amount Reading Points (RP) from fren with address @_from
    function buyRpFf(address _from, uint256 _amount) public payable {
        // check if user has enough balance in wallet
        require(msg.sender.balance / 1 ether >= _amount, "Insufficent Balance");
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                _from,
                _amount
            ),
            "Transfer failed."
        );
        balanceSheet[msg.sender] += _amount; // increase user's RP based on amount purchased
    }

    // buy Reading Points (RP) from app
    function buyRpFa(uint256 _amount) public payable {
        // check if user has enough balance in wallet
        require(msg.sender.balance / 1 ether >= _amount, "Insufficent Balance");
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                address(this), // change this later to my celo wallet address
                _amount
            ),
            "Transfer failed."
        );
        balanceSheet[msg.sender] += _amount; // increase user's RP based on amount purchased
    }
}
