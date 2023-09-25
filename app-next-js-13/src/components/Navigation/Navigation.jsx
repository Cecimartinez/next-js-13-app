import Link from "next/link";

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  }
]

export function Navigation() {
  return (
    <div  className=" flex  items-center  justify-center my-12 border mx-10 py-2 px-5 rounded-xl">
    <nav className="navigation">
      <ul className="flex ">
        {links.map(link => (
          <li className="text-xl  px-4" key={link.label}>
            <Link href={link.route}>
            {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}