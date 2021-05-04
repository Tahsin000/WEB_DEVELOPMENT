/*
    بسم الله الرحمن الرحيم

     الجامعة الإسلامية العالمية شيتاغونغ

    لا تحزن ان الله معنا
*/

///////////// IIUC - 49 /////////////

#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define MX 100000000
#define fr(i, a, b) for (ll i=a; i<b; i++)
#define rfr(i, a, b) for (ll i=a; i>=b; i--)
#define dev(x) cout << #x << " : " << x << endl;
#define HHJN ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);

#define all(n) n.begin(), n.end()
#define uper(n) transform(n.begin(), n.end(), n.begin(), ::toupper);
#define lower(n) transform(n.begin(), n.end(), n.begin(), ::tolower);

#define vl(n) ll v[n+10]
#define pb push_back

// ll arr[mx]= {0}, prime[mx];
int binarySearch(int arr[], int l, int r, int x);
ll gcd(ll a, ll b);
ll lcm(ll a, ll b);   
ll BigMod(ll b, ll p, ll m);
void sieve (vector<ll>&v);

/////////////////////////////////////////////////////

void solve()
{
    ll t, tmp = 0, rem;
}

/////////////////////////////////////////////////////

int main()
{
    // fun();
    HHJN;
    solve();
   
    // test();
    return 0;
}

ll gcd(ll a, ll b)
{
    if (b==0) return a;
    return gcd(b, a%b);
}

ll BigMod(ll b, ll p, ll m)
{
    if (p == 0) return 1;

    ll ans = BigMod(b, p/2, m);
    ans = ( ans * ans ) % m;
    if (p % 2 == 1) ans = (ans * b) % m;
    return ans;
}

int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l+(r-l) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return binarySearch(arr, l, mid-1, x);
        return binarySearch(arr, mid+1, r, x);
    }
    return -1 ;
}

void sieve (vector<ll>&v)
{
    v.assign(MX, 0);
    v[0] = 1;
    v[1] = 1;
    for (int i=4; i<=MX; i+=2) v[i] = 1;

    for (int i=3; i*i<=MX; i+=2)
    {
        if (v[i] == 0)
        {
            for (int j=i*i; j<=MX; j+= i*2)
            {
                v[j] = 1;
            }
        }
    }

}

ll lcm(ll a, ll b)
{
    return (a / gcd(a, b)) * b;
}


